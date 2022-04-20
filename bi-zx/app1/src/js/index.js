/** 测试消费方法 */
const add = function (a, b) {
    console.log(a+b)
    return a + b
}

const del = function (a, b) {
    console.log(a - b);
    return a - b
}

export default {
    add,
    del
}