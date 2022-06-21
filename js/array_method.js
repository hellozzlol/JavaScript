//array_method.js

//some : 조건을 만족하는 요소 하나 true/false
//every: 조건을 만족하는 요소 true/false
//fid : 찾기, findIndex: 인덱스.
//indexOf : 배열요소 =>인덱스 값 변환
//sort():정렬.
//split(구분자) : 문자열 => 배열
//join() : 배열 = > 문자열 

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8);

let str = `A whole new world 
That's where we'll be 
A thrilling chase 
A wondrous place 
For you and me `

let strAry = str.split(' '); // 반환타입 배열.
idx = strAry.indexOf('CSS') //찾는 값이 없으면 -1값 리턴//lastIndexOf(순번을 뒤에서 부터 처리)
let names = ['박은지', '윤정은', '박지혜', '김나희']
idx = names.indexOf('김나희s');

let result = names.find(function (elem, idx, ary) {
    return elem == "김나희"
});
result = [6, 4, 3, 21, 14].find(elem => {
    return elem > 100;
});

result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    //console.log(elem, idx, ary);
    return elem > 20; //만족하는 요소(값)이 하나있으면 true
})

result = [6, 4, 3, 21, 14].every((elem, idx, ary) => { //전체요소가함수를 만족하는
    console.log(elem, idx, ary);
    return elem % 2 == 0;
});
console.log(result);

console.clear();

let tempAry = [];
for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10) + 1; //0<= x < 1 => 1~10까지의 임의 수
    console.log(temp);
    tempAry.push(temp);
}

//1. tempAry 배열의 값이 다 짝수인지 확인
var evens = tempAry.filter(x => x % 2 === 0);



//2. temAry 배열의 값 중 3의 배수 존재 확인.




//3. 5보다 큰 값이 있으면 그 값을 반환.


console.clear();
result = [4, 6, 3, 21, 14].sort(function (a, b) {
    // if(a-b>0){
    //     return -1;//오름차순으로 정렬(반대로 하면 내림차순)
    // }else{
    //     return 1; //
    // }
    console.log(a, b);
    return a - b; // 음의 값 : 오름차순. 
});

let objAry = [{
        name: "홍길동",
        age: 18
    },
    {

        name: "김민수",
        age: 20
    },
    {

        name: "박세민",
        age: 19
    }
];

console.clear();
console.log("홍" < "박"); // a b c
result = objAry.sort(function (a, b) {
    // if(a.name > b.name){
    //     return -1;
    // }else {
    //     return 1;
    // }
    //return a.name < b.name ? -10 : 10; //이름오름차순.
    return a.age < b.age ? -1 : 1;
});
result = ['홍길동', '백민규', '김상우'].join('-'); // ,




//1.split 으로 이름 쪼개준다
//2.sort로 오름차순 정렬하고
//3.join 으로마무리

names = '권소정, 김하은, 유선희, 김가윤'.split(', '); // => '권소정, 김가윤,김하은,유선희
result = names.sort(function (a,b) {
    return a < b ? -1 : 1;
});
result = names.join('-');
console.log(result);






strAry = 'Littering'.split(''); //문자 단위 하나하나 쪼개는게 split
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0;
    // console.log(cnt)
});
cnt = strAry.reduce((accum, curr) => {
    accum = curr == 't' ? 1 : 0;
    return accum;
}, 0)
//console.log('cnt:'+cnt);