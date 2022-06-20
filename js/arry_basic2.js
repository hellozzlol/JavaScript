let data = `[{"id":1,"first_name":"Ignacius","last_name":"Vanichev","email":"ivanichev0@mapy.cz","gender":"Male","salary":4143},
{"id":2,"first_name":"Jessamyn","last_name":"Prisley","email":"jprisley1@amazon.co.jp","gender":"Female","salary":3930},
{"id":3,"first_name":"Aeriell","last_name":"Beedle","email":"abeedle2@cpanel.net","gender":"Agender","salary":3777},
{"id":4,"first_name":"Carolina","last_name":"Van Velde","email":"cvanvelde3@noaa.gov","gender":"Female","salary":1412},
{"id":5,"first_name":"Shoshana","last_name":"Rickman","email":"srickman4@amazonaws.com","gender":"Female","salary":2661},
{"id":6,"first_name":"Pen","last_name":"Croizier","email":"pcroizier5@indiegogo.com","gender":"Male","salary":4080},
{"id":7,"first_name":"Bat","last_name":"Frampton","email":"bframpton6@scientificamerican.com","gender":"Male","salary":1729},
{"id":8,"first_name":"Isadora","last_name":"Yonnie","email":"iyonnie7@sphinn.com","gender":"Female","salary":1078},
{"id":9,"first_name":"Sibby","last_name":"Crilly","email":"scrilly8@tinypic.com","gender":"Female","salary":3478},
{"id":10,"first_name":"Helene","last_name":"Lack","email":"hlack9@mtv.com","gender":"Non-binary","salary":4454},
{"id":11,"first_name":"Leigh","last_name":"Bradd","email":"lbradda@pcworld.com","gender":"Female","salary":1419},
{"id":12,"first_name":"Chanda","last_name":"McCaster","email":"cmccasterb@ameblo.jp","gender":"Female","salary":4464},
{"id":13,"first_name":"Lari","last_name":"Courtin","email":"lcourtinc@buzzfeed.com","gender":"Female","salary":2587},
{"id":14,"first_name":"Randal","last_name":"Chipps","email":"rchippsd@tinypic.com","gender":"Male","salary":1618},
{"id":15,"first_name":"Lennard","last_name":"Worton","email":"lwortone@squarespace.com","gender":"Male","salary":4034}]`;

let objAry = JSON.parse(data); //JSON.parse() : 문자열 => 오브젝트.
console.log(data);
console.log(objAry);
console.clear();


let over3000 = objAry.filter((val, idx) => { //{id:?,faname:?,salary:?....}
    return val.salary >= 3000; //filtering 처리.
}).map((val, idx) => {
    let obj = {}; // A->B
    obj.name = `${val.last_name},${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);

//Female 값 평균값 기능 구현.
// let avg = objAry.filter((val,idx)=>{
//     return val.avg < val.femaleAVG
// }).map((val,idx)=>{
//     let obj = {};
//     obj.name = `${val.last_name},${val.first_name}`
//     obj.sal= `${val.sal}`
//     return obj;
// })

let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        cnt++;

    });
avg = sum / cnt;

console.log(`여사원의 급여 합계${sum}`);
console.log(`여사원의 급여 평균${avg}`);

console.clear;

let salaries = [];
// let salaries = objAry.filter((val,idx)=>{//{id:?,faname:?,salary:?....}
//     return val.salary ;//filtering 처리.
//     }).map((val,idx)=>{
//         let obj = {};// A->B
//         obj.salary = `${val.salary}`;
//         return obj;
//     });

//objAry.forEach(val => salaries.push(val.salary))
console.log(salaries);

function getMaxValue(ary = []) {
    //배열요소에서 제일 큰 값을 반환하는 함수.
}

let maxVal = getMaxValue(salaries);
console.log(`가장 큰값 : ${maxVal}`);


function sortAscend(ary = []) {
    //오름차순 정렬하는 함수.
}
result = sortAscend(salaries);
console.log(salaries);
console.clear();

// reduce 메소드.[1,2,3,4]


result = salaries.reduce(function (accum, curr, curIdx, arr) {
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합${accum+curr}`);
    return curr + accum;
}, 0); // map, filter메소드
console.log(`최종 결과 : ${result}`);

result = [56, 88, 97, 100].reduce(function (accum, curr) {
    if (curr % 2 == 0)
        accum.push(curr); //배열의 추가
    return accum;
}, []); //accum = [1]=> 1
//result = [1, 2, 3, 4].map(val => val);
console.clear();

//<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
console.log(result);
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, CurrIdx, ary) => {
    if (CurrIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`
    if (CurrIdx == ary.length - 1) {
        accum += '</ul>'
    }

    console.log(accum); //<ul><li>Banana</li><li>Cherry</li></ul>
    return accum;
}, '');
console.log(result);
document.write(result);

result = [3,2,4,1,5].reduce(function(accum,curr){
if(accum> curr)
    return accum;
    else return curr;
},0);//max 값 반환. 문제1)

//합계구하기
result = [3,2,4,1,5].reduce((accum,curr)=>{
  return accum+curr;
},0);
console.log(`합계 : ${result}`);
//평균 구하기
result = [3,2,4,1,5,8,10].reduce((accum,curr)=>{
    return accum+curr/result;
  },0);
  console.log(`평균 : ${result}`);

//   //합계구하기
// result = [3,2,4,1,5,8].reduce((accum,curr,currIdx,ary)=>{
//     if(currIdx ==ary/length-1){//마지막순번일 경우
//         return(accum+curr)/ary.length;
//     }
//     return accum+curr;
// });//평균구하기
//   console.log(`평균 : ${result}`);
  