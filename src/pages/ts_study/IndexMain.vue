<template>
    <div>
        <input v-model="msg">
        <p>msg: {{ message }}</p>
        <p>computed msg: {{ computedMsg }}</p>
        <button @click="greet">Greet</button>
    </div>
</template>

<script lang="ts">
    import { Mouse, Person, seeYou, user } from "./components/mouse";
    import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

    @Component
    export default class MyComponent extends Vue {
        message = 'Ts —— c初体验';

        @Watch('message')
        onChildChanged(val: string, oldVal: string) {
            console.log(val + '____' + oldVal);
        }
        created() {
            console.log(user);
        }
    }
</script>
