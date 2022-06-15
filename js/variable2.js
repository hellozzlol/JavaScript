//variable.2
var l1;//hoisting


let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27]; //선언 & 초기화 
ary[ary.length] = 50; //length 는 배열의 크기

ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100;
console.log(typeof ary[7]);

for (let i = 0; i < ary.length; i++) {
    console.log(i + '번째' + ary[i]);
}

ary = ['사과', '바나나', '고구마', '수박'];
document.write('<ul>');
console.clear(); //로그지우기
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}

document.write('</ul>');

ary = [{
        name: '홍길동',
        age: 20,
        phone: '010-1111-1112'
    },
    {
        name: '김민수',
        age: 28,
        phone: '010-3541-1112'
    },
    {
        name: '박우용',
        age: 31,
        phone: '010-1431-1112'
    },
    {
        name: '최선식',
        age: 32,
        phone: '010-1531-1112'
    },
]

// document.write('<ul>');
// for (let person of ary) {
//     document.write('<li>' + person['name'] + ' ' + person['phone'] + '</li>')
// }
// document.write('</ul>');

let str = '';
str += '<ul>';
for (let person of ary) {
    str += '<li>이름:' + person['name'] + '  연락처:' + person['phone'] + ' 나이 :  ' + person['age'] + '  </li>';
}
str += '</ul>';
console.log(str);


str += '<table>'
str = '<table border=1>'
for (let person of ary) {
    str += '<tr>' + '<td>' + person['name'] + '</td>' + '<td>' + person['phone'] + '</td>' + '<td>' + person['age'] + '</td>' + '</tr>';
}
str += '</table>';
console.log(str);


document.write(str);

const v1 = 'hello';
//v1 = 'new';
// 원시타입 vs. 참조타입.
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);

let o1 = {
    name: 'one'
};
let o2 = o1;
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2);


const obj = { //오브젝트 생성
    sno: '22-12345',
    sname: 'Park'
}

obj.sno = '22-2222'; //obj 상수변수에 값을 새롭게 선언x,obj 참조하고 속성의 값을 변경 o.

//obj = ''; 
// 새로운 값을 할당 => 오류.

//var vs. let : 변수선언
//var 변수선언 : 변수의 scope 전역변수/지역변수


let var1 = 'hello';

{// 이블럭안에서 선언된 함수라서 오류도 안나고 좋음 
    let var1 = 'new hello';
    console.log(var1);
}


function localFnc(){
    let var2 = 'nice';// 함수안에 있는 변수들은 지역변수(local variable)
    console.log(var2);
    console.log(var1);
}

localFnc();//함수호출
//console.log(var2);//var2라는 녀석을 함수 밖에서 선언하면 선언되지 않은 함수 호출했다고 오류남
console.log(var1);

console.log(l1); //var  는 중복이 되도 오류안뜸 그리고 con
var l1 ='hello';
var l1 ='hello';
console.log(l1);// 그리고 콘솔창 위아래로 입력해도 에러 안남 이런기능을 hoisting호이스팅이라함 

var num;
for( num of ary){
    console.log(num);
}
console.log(num);


//코드 작성할때 오류 안날려고하려면 let 을 쓰면 됩니다.
