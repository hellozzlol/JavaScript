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
