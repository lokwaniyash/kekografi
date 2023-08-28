const fs = require('fs');

// american phonetics
// const parseData = fs.readFileSync('yash-dataset-2.txt', 'utf8');
// let parse = {};
// parseData.split('\n').forEach(item => {
//     let itemArr = item.split(' ');
//     parse[itemArr[0]] = itemArr[1].replace(/\W/g, '')
//     ;
// })

// const data = fs.readFileSync('yash-dataset-1.txt', 'utf8');
// let mainData = {};
// data.split('\n').forEach(item => {
//     let itemArr = item.split(' ');
//     let proStr = '';
//     for(let i = 2; i < itemArr.length; ++i) {
//         proStr += parse[itemArr[i].replace(/\W/g, '')];
//     }
//     mainData[itemArr[0].replace(/\W/g, '')] = proStr;
// })

// british phonetics
const parseData = fs.readFileSync('yash-dataset-brit-2.txt', 'utf8');
let parse = {};
parseData.split('\n').forEach(item => {
    let itemArr = item.split(' ');
    parse[itemArr[0].toLowerCase()] = itemArr[1].toLowerCase().replace(/\W/g, '')
    ;
})

const data = fs.readFileSync('yash-dataset-brit-1.txt', 'utf8');
let mainData = {};
data.split('\n').forEach(item => {
    let itemArr = item.split(' ');
    let proStr = '';
    for(let i = 2; i < itemArr.length; ++i) {
        proStr += parse[itemArr[i].toLowerCase().replace(/\W/g, '')];
    }
    mainData[itemArr[0].toLowerCase().replace(/\W/g, '')] = proStr;
})
const str = 'what are you talking about'; // wot aar yu toking abaut

// Translate to dataset

let output = '';
str.split(' ').forEach(word => {
    output += mainData[word] + ' ';
})

console.log(output);