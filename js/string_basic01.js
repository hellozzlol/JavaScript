//문자열 1개바꾸기

const str1 = 'GOOD MORNING, GOOD AFTERNOON,good morning good night';
console.log(str1.replace('good','bad'))

//문자열을 모두 소문자로 변환한후 문자열로 찾아 바꾸기
const str2 = 'GOOD MORNING, GOOD AFTERNOON,good morning good night';
//문자열을 모두 소문자로 변환한 후, 처음 나오는 찾는 문자열을 대상 문자열로 변경합니다.
console.log(str2.toLocaleLowerCase().replace('good','bad'));

//정규표현식으로 대소문자구분없이 문자열1개바꾸기
const str3 = 'GOOD MORNING, GOOD AFTERNOON,good morning good night';
//대소문자 구분없이 처음나오는 찾는 문자열을 대상 문자열로 변경합니다.
console.log(str3.replace(/good/i,'bad'));

//대소문자 구분없이 문자열 1개바꾸기
const str4 = 'GOOD MORNING, GOOD AFTERNOON,good morning good night';
//대소문자 구분없이 문자열 1개바꾸기
const str5 = 'GOOD MORNING, GOOD AFTERNOON,good morning good night';
console.log(str3.replace(/good/gi,'bad'));

//문자열 대소문자 전체 바꾸기

var str6 = 'this is the only method! 대소문자 변환 THE END';
console.log(str5.toLowerCase()); //'this is the only method! 대소문자 변환 THE END';
console.log(str5.toUpperCase());//'THIS IS THE ONLY METHOD! 대소문자 변환 THE END';

//concat()메서드로 문자열합치기

const str7 = '문자열1';
const str8 = '문자열2';
console.log(str7.concat(str8)); //'문자열1 문자열2'변환

//문자열 배열의 문자열 합치기

let strarr = ['good',' ', 'morning','!'];
console.log(''.concat(...strarr));//'good morning!을 반환