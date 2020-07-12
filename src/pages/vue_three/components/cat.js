// 前端 class 实现私有变量

const _name = Symbol('name');
export default class Cat {
    constructor(name) {
        // _name 是一个私有变量
        this[_name] = name || 'Tom';
    }
    setName(name) {
        this[_name] = name;
    };
    getName() {
        return this[_name];
    };
    action() {
        console.log('喵喵喵~');
    }
}
