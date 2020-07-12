<template>
    <div class="index">
        <p>这是count的值 {{count}}</p>
        <p>这是refCount的值 {{refCount}}</p>
        <p>这是computedCount的值 {{computedCount}}</p>
        <button @click="add">+1</button>
        <button @click="stop">stopWatch</button>
        <p>{{x + '-----' + y}}</p>
        <p>{{`>>>>>>>>>>>>>>>>>>>>>${$store.state.vueThree.show}<<<<<<<<<<<<<<<<<<<<<`}}</p>
        <button @click="createCat('huni')">造猫咪</button>
    </div>
</template>

<script>
    import { reactive, computed, watch, onMounted, onUnmounted, ref, toRefs } from '@vue/composition-api';
    import { testTs } from "./components/jerry.ts";
    import Cat from "./components/cat";

    // 监听鼠标位置 （体现 vue3.0 Function-based Api 较 vue2.x Class-based Api 优势）
    function useMousePosition() {
        const x = ref(0);
        const y = ref(0);
        const update = e => {
            x.value = e.pageX;
            y.value = e.pageY;
        };
        onMounted(() => {
            window.addEventListener('mousemove',update)
        });
        onUnmounted(() => {
            window.removeEventListener('mousemove',update)
        });
        return { x, y }
    }
    const App = {
        name: "IndexMain",
        setup(props, ctx) {
            // data
            const state = reactive({ count: 0 });
            const refCount = ref(7);
            const { x, y } = useMousePosition();
            // computed
            const computedCount = computed(() => refCount.value + 1);
            // watch
            const watchCount = watch(() => refCount.value, (val, oldVal) => { console.log(oldVal, val)});
            // methods
            const add = () => {
                state.count ++;
                refCount.value++;
            };
            const createCat = function (name) {
                let cat = new Cat(name);
                // 读
                console.log(cat.getName());
                // 写
                cat.setName('Jerry');
                console.log(cat.getName());
                // 调方法
                cat.action();
            };
            const stop = () => { watchCount() };

            return {
                ...toRefs(state),
                x,
                y,
                refCount,
                computedCount,
                add,
                stop,
                createCat
            };
        },
        created() {
            testTs();
        },
        mounted() {
            // console.log(dog.loadingFun)
            console.log(dog);
            // window.dog.loadingFun(true);
        },
        props: {
            ip: String
        }
    };
    export default App;
</script>

<style scoped>

</style>
