<template>
    <canvas id="PoPo" ref="PoPo" />
</template>
<script>
export default {
    name: "PoPo",
    props: {
        conf: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            defaultConf: {
                modeMap: ["up", "float", "down"],
                mode: "down", // 运动模式
                count: 50, // 数量
                size: 10, // 大小
                randomSize: true, // 随机大小
                colors: ["rgba(255,243,125,1)", "rgba(232,163,114,1)", "rgba(255,138,224,1)", "rgba(114,118,232,1)", "rgba(169,255,239,1)"],
                randomColor: true, // 随机颜色
                speed: 0.1, // 运动速度
                icon: "star", // star / circle / snow / imgURL
                hornOfStar: 4, // N角星
            },
            itemList: [],
            angle: 0,
        };
    },
    created() {
        const icon_xue =
            "data:image/png;base64,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";

        this.$nextTick(() => {
            let img = new Image(); // 创建img元素
            let [w, h] = [window.innerWidth, window.innerHeight];
            let { conf, itemList, angle, defaultConf } = this;
            let { modeMap, mode, count, size, randomSize, colors, randomColor, speed, icon, hornOfStar } = Object.assign({}, defaultConf, conf);

            let canvas = this.$refs.PoPo;
            let ctx = canvas.getContext("2d");
            canvas.width = w;
            canvas.height = h;

            for (let i = 0; i < count; i++) {
                // x,y圆心掉的坐标位置，r代表圆的半径，d每个圆的每个圆之间的间距，c代表的颜色
                itemList.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    d: Math.random() * count,
                    r: randomSize ? Math.random() * size : size,
                    c: randomColor ? colors[i % 4] : colors[0],
                });
            }

            if (!["star", "circle"].includes(icon)) {
                img.onload = function() {
                    window.requestAnimationFrame(draw); // 执行和调用函数
                };
                img.src = icon === "snow" ? icon_xue : icon; // 设置图片源地址
            } else {
                //执行和调用函数
                window.requestAnimationFrame(draw);
            }

            //绘画的函数
            function draw() {
                ctx.clearRect(0, 0, w, h);
                for (let i = 0; i < count; i++) {
                    let { x, y, r, d, c } = itemList[i];
                    // 绘制圆形
                    function createCircle() {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.fillStyle = c;
                        ctx.arc(x, y, r, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.closePath();
                        ctx.fillStyle = c;
                        ctx.strokeStyle = c; // borderColor
                        ctx.fill();
                        ctx.stroke();
                    }
                    // 绘制多角星
                    function createStar() {
                        /**
                         * 绘制n角星
                         * @param ctx
                         * @param count 星星数量
                         * @param R 中心到顶点距离
                         * @param r 中心到凹点距离
                         * @param x 左上角X坐标Y
                         * @param y 左上角坐标
                         * @param rot 旋转角度
                         * @param configJson 配置信息
                         */

                        ctx.beginPath();
                        let count = hornOfStar,
                            R = 2 * r,
                            rot = 15,
                            border = 0;
                        for (let i = 0; i < count; i++) {
                            let perDeg = 360 / count;
                            let degA = perDeg / 2 / 2;
                            let degB = 360 / (count - 1) / 2 - degA / 2 + degA;
                            ctx.lineTo(
                                Math.cos(((degA + perDeg * i - rot) / 180) * Math.PI) * R + x + border + R * Math.cos((degA / 180) * Math.PI),
                                -Math.sin(((degA + perDeg * i - rot) / 180) * Math.PI) * R + y + border + R
                            );
                            ctx.lineTo(
                                Math.cos(((degB + perDeg * i - rot) / 180) * Math.PI) * r + x + border + R * Math.cos((degA / 180) * Math.PI),
                                -Math.sin(((degB + perDeg * i - rot) / 180) * Math.PI) * r + y + border + R
                            );
                        }
                        ctx.closePath();
                        ctx.fillStyle = c;
                        ctx.strokeStyle = c; // borderColor
                        ctx.fill();
                        ctx.stroke();
                    }
                    // 绘制图像
                    function createImg() {
                        // 执行drawImage语句
                        ctx.drawImage(img, x, y, r * 4, r * 2);
                    }
                    if (icon === "star") createStar();
                    else if (icon === "circle") createCircle();
                    else createImg();
                }
                drop();
            }

            // 掉落
            // 记住两个公式： Math.sin(弧度)返回是一个 0 1 -1 的数字 Math.cos(1 0 -1 ) 自由体
            const drop = () => {
                angle += 0.01;
                for (let i = 0; i < count; i++) {
                    let item = itemList[i];
                    item.x += Math.cos(angle) * 0.2;
                    if (mode === "down") item.y += item.r * speed;
                    if (mode === "up") item.y -= item.r * speed;
                    if (mode === "fload") item.y += Math.cos(angle + item.d) * 0.5;
                    //越界处理
                    if (item.x >= w + size || item.x <= 0 - size || item.y >= h + size || item.y <= 0 - size) {
                        if (mode === "up") {
                            item.y = h + size - 1;
                            item.x = w * Math.random();
                        } else if (mode === "float") {
                            item.y = h * Math.random();
                            item.x = w * Math.random();
                        } else if (mode === "down") {
                            item.y = 1 - size;
                            item.x = w * Math.random();
                        }
                    }
                }
                window.requestAnimationFrame(draw);
            };
        });
    },
};
</script>
<style scoped>
#PoPo {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}
</style>
