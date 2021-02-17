// 补充一下函数方面的知识

const { time } = require("console");

// 1.
function say(name, word) {
    console.log(name, word)
}
let newSay = say.bind(this, '张飞');
newSay('我爱你')
newSay('我恨你')

// 2、
function eat(times, cb) {
    let time = 0;
    return function() {
        time++;
        times === time ? cb() : null
    }
}

let newEat = eat(5, function() {
    console.log('吃完了')
});
newEat()
newEat()
newEat()
newEat()
newEat()