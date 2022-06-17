//string_basic.js

let str = 'Hello';//문자열 string
let str1 = new String('Hello');//문자열 객체(object)

console.log(str == str1); // 값
console.log(str === str1.valueOf());// 타입 & 값


let num = new Number(123); //number => object
let num1 = 123;//number;
console.log(num.valueOf()===num1);//객체 => 기본데이터 타입 변환.


//원시타입 : string,number,boolean,undefined,
//객체타입 : 함수,Object({name : ?, age:?}),배열,



console.log(" Hello ".trimStart());
console.log("This is the only story".slice(10,15));
console.log("Hello".slice(1,2));
console.log("This is the only story".substring(10,-8))
console.log(str1.substring(1,5))


const num2 = 123;
const num3 = 1234.56;
const bool = true;
const str2 = '문자열타입'
const arr = [1,2,'a','b',3];
const obj = {key : 'data',value:15};

console.log(num2.toString());
console.log(num3.toString());
console.log(bool.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(str2.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());
//indexof()

// search()

//only, story
let ary = [];
let oby = {};
let reg = /good/;//new RegExp();
let regStr = "bad MORNING, GOOD  AFTERNOON, good evening, and good night"
console.log(regStr.replace(/good\s/gi, 'bad '))


//문자열찾기

const str3 = 'good ,orning, good afternoon, good evening, and good nigth';
console.log(str3.indexOf('even'));//35를반환
console.log(str3.lastIndexOf('good'));//48을반환함.
console.log(str3.lastIndexOf('down'));//-1반환함


//문자열 찾기 시작위치 지정 예

const str4 = 'good ,orning, good afternoon, good evening, and good nigth';
//첫번째 두번째 good 을 건너뛰고 3번째 good 의 시작 인덱스로 반환합니다.
console.log(str3.indexOf('good',15))//30을 반환합니다.

//특정 위치의 문자 1개를 얻기

const str5 = 'good ,orning, good afternoon, good evening, and good nigth';
console.log(str5.charAt(30));//'g'를 반환.
console.log(str5.charAt(100))// ''반환.


//특정문자열이 포함되었는지 알기

const str6 = 'good ,orning, good afternoon, good evening, and good nigth'
console.log(str5.includes('even'));// true반환
console.log(str5.includes('dawn'));// falae반환

//대소문자 구분없이 문자열 찾기

const str7 = 'good ,orning, good afternoon, GOOD EVENING, AND NIGHT';
console.log(str6.toLowerCase().indexOf('good')); //0을반환
console.log(str6.toLowerCase().indexOf('GOOD')); //0을반환
console.log(str6.search('GOOD')); //31을반환
console.log(str6.search(/GOOD/i)); //0을반환


//정규 표현식으로 문자열 찾기

const st8 = 'bad MORNING, GOOD AFTERNOON, good eveing, and good night';

//'good' 뒤에 공백 1개가 있고 그 뒤에 단어1개가 있는 패턴인 것을 모두 찾음
console.log(st8.match(/good\s\w+/gi));//['GOOD AFTERNOON, good eveing, and good night']반환
//'bed' 뒤에 공백 1개가 있고 그 뒤에 단어1개가 있는 패턴인 것을 모두 찾음
console.log(st8.match(/bad\s\w+/gi));
//'none' 뒤에 공백 1개가 있고 그 뒤에 단어1개가 있는 패턴인 것을 모두 찾음
console.log(st8.match(/none\s\w+/gi));
//'good' 문자열인 것 1개를 찾음.
console.log(st8.match('good'));//["good"]

