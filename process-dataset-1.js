const fs = require('fs');

const parseData = fs.readFileSync('yash-dataset-brit-1.txt', 'utf8');
let total = {};
parseData.split('\n').forEach(item => {
    let itemArr = item.split(' ');
    itemArr.splice(0, 1);
    itemArr.splice(1, 1);
    itemArr.splice(2, 1);
    itemArr.forEach(value => {
        total[value.replace(/\W/g, '')]=false;
    })
})

console.log(Object.keys(total).sort());