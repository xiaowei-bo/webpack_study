### webpack_study项目
==============================

#### 地址

    页面地址：https://view.hwq1114.club
    jenkins地址：http://hwq1114.club:9878/job/webpack_study/

#### 命令

    * 构建命令：npm run build:sh
    * 部署命令：npm run start:sh

#### 发布方式

    自动部署：git push 完成之后，通过 webhook 自动触发 jenkins 构建部署
    手动触发：打开jenkins，点击Build Now，等待finish success 即发布成功   

#### 思考

    利弊分析：
    构建部署一体自动触发式：
        利：效率更高
        弊：构建部署其一出错，容易导致服务异常
    优化方向：
        构建部署操作分离，构建采用自动触发方式，部署采用人为操作方式