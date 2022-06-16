//function2

//함수정의문.
function sumAry(ary) { //어떤 값이 올진 모르겠지만 여기서 뭔갈 해주겠다라는 sum ary이라는 정의구문안에서 매개변수로 들어올녀석
    let result = 0;
    for (let i = 0; i < ary.lenght; i++) {

        result += ary[i];
    }

    return result;

}
//const sumAry = Function(ary){...} => 함수저으이문 => 실제처리하는 건 함수표현식 처럼 처리.

let args = [1, 2, 3, 4, 5]; //매개 값.
sumAry(args); //실행문 호출

let arrNum = [1, 2, 3]; //매개 값
sumAry(args); //실행문 호출




//함수표현식.

const sum = function (num1, num2) {
    if (num1) { // undefined ->  false 의미. null,0
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자.
    return num1 + num2;
}
console.log(sum(10)); //함수정의문()

const sum2 = sum; // 함수정의문.
console.log(sumAry);

//함수표현식.

//const sayHello = function (name){
//return 'Hello' + name;
//}

const sayHello = name => 'Hello' + name; //화살표함수()
//메소드의 매개값(콜백함수)
console.log(sayHello('홍길동'));

let arr = ['홍길동', '김영수', '최민식'];
//배열 각각 요소들에대해 함수를 실행하는 구문 매개값이 함수가옴
arr.forEach((val /*,ind,ary*/ ) => console.log(sayHello(val)));



arrNum = [29, 34, 12, 55, 29, 42];

//1.배열의 각 요소중에서 짝수의 값만 더하도록 sumEven();




function sumEven(arr) {
    let result=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result += arr[i];
        }   
    }
    return result;
}
arrNum.forEach((val) => console.log(sumEven(arrNum)));

//2.배열의 홀수번째 요소의 합 sumOdd();



 function sumOdd(arr) {
     let result =0;
     for(let i = 0; i<arr.length; i++){
         if(i%2==0){
             result+=arr[i];
         }
     }

     return result;
   
 }
arr.forEach((val) => console.log(sumOdd(arrNum)));