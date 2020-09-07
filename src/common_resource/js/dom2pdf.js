import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * @param ele 目标元素
 * @param itemClass 页面列表颗粒度容器类名，防止内容部分被切割
 * @param title 下载文件名
 * @description html 转 pdf 方法
 * */
export const dom2pdf = (ele, itemClass = 'dom_to_pdf_item' , title = 'my_life.pdf') => {
    // 设定页面置顶，防止截图异常
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const A4_INFO = {
        width: 592.28,
        height: 841.89
    };
    const contentWidth = ele.clientWidth; // 获得该容器的宽
    let contentHeight = ele.clientHeight; // 获得该容器的高
    const domScale = A4_INFO.width / contentWidth;
    const itemNodeList = ele.getElementsByClassName(itemClass);
    const delay_200 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 200);
        })
    };
    const init = async () => {
        // 分页适配，防止设置颗粒度被切割
        let currentId = 1;
        const changeList = [];
        for(const itemNode of itemNodeList) {
            // 元素距离顶部距离
            const top_distance = itemNode.getBoundingClientRect().top * domScale;
            // 元素距离当前页底部距离
            const bottom_distance = A4_INFO.height - (top_distance % A4_INFO.height);
            // 若底部距离小于元素高度（容不下），增加底部距离大小 margin-top，换至下一页
            if(bottom_distance < (itemNode.clientHeight * domScale)) {
                const curMarTop = itemNode.style['margin-top'];
                // 记录被操作元素以及margin-top
                const obj = {
                    id: currentId,
                    marTop: curMarTop
                };
                itemNode.setAttribute('id', 'dom_to_pdf_' + currentId);
                changeList.push(obj);
                if(curMarTop.includes('px')) { // 本身有 margin-top 且单位为 px 处理
                    itemNode.style['margin-top'] = bottom_distance + Number(curMarTop.replace('px', '')) + 'px';
                } else if(curMarTop.includes('rem')) { // 本身有 margin-top 且单位为 rem 处理
                    itemNode.style['margin-top'] = bottom_distance + (Number(curMarTop.replace('rem', ''))*42) + 'px';
                } else {  // 本身无 margin-top
                    itemNode.style['margin-top'] = bottom_distance + 'px';
                }
                // 元素增加 margin-top 容器同步增加高度
                contentHeight += bottom_distance;
            }
        }
        // 操作dom，暂时延迟200ms等待渲染
        await delay_200();
        const canvas = await html2canvas(ele, {
            useCORS: true,
            backgroundColor: '#ffffff',
            allowTaint: true
        });
        // 还原被操做过元素的 margin-top
        if(changeList.length) {
            changeList.forEach((item) => {
                const node = document.getElementById('dom_to_pdf_' + item.id);
                node.style['margin-top'] = item.marTop;
            });
        }
        const canvasWidth = canvas.width; // 生成的canvas宽度
        const canvasHeight = canvas.height; // 生成的canvas的高度
        const imgUrl = canvas.toDataURL('image/jpeg', 1); // 图片资源
        const imgWidth = A4_INFO.width; // 原比例缩放至 A4 纸宽度
        const imgHeight = A4_INFO.width / canvasWidth * canvasHeight; // 原比例缩放高度

        let imgHeight_comp = imgHeight; // 用于分页计算的图片高度
        let position = 0; // 位置

        let PDF = new jsPDF('', 'pt', 'a4');
        if (imgHeight_comp < A4_INFO.height) { // 一页可以容下
            PDF.addImage(imgUrl, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else { // 一页容不下,分页操作
            while (imgHeight_comp > 0) {
                PDF.addImage(imgUrl, 'JPEG', 0, position, imgWidth, imgHeight);
                imgHeight_comp -= A4_INFO.height;
                position -= A4_INFO.height;
                if (imgHeight_comp > 0) {
                    PDF.addPage();
                }
            }
        }
        const fileName = title.includes('.pdf') ? title : `${title}.pdf`;
        PDF.save(fileName)
    };
    return init();
};
