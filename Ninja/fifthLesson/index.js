const lodash = require("lodash");
for (let i = 0; i <= 4; i++) {
    let number = lodash.random(2, 10);
    console.log(number);
}
let myfun = lodash.once(() => {
    console.log("good");
})
myfun()
myfun()