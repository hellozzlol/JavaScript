//function3.js


function sumNumber() {

    let result = 0;

    console.log(arguments); //함수가 호출되면 arguments 객체.
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]; //arguments [i]값을 가져온다
    }
    return result;
}

sumNumber(1, 2, 3, 4, 5);
//sumNumber(1,2,3,4,5,6,7,8);

//나머지 파라미터.

function sumParam(...args) { //갯수가 얼마인진 모르겠지만 가변적으로 처리하도록 하겠습니다. 특징 : 배열요소 args(변수이름 내가 원하는대로 설정가능하나 남이 알아보로고 )
    let result = 0;
    args.forEach((val) => {
        result += val;

    });
    return result;


}

console.log(sumParam(1, 2, 3, 4, 5, 6));

//커링함수.

function orderSet(buger, beverage) {
    console.log('버거 : ' + buger + '음료 : ' + beverage);
}
orderSet('치즈버거', '콜라');


function orderSet_curring(buger) {
    return function (beverage) {
        console.log('버거 : ' + buger + '음료 : ' + beverage);
    }

}
//orderSet_curring('치즈버거');
//console.log(orderSet_curring('치즈버거')('콜라'));

let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); //()함수실행.
beverageFnc('환타'); //()함수실행.



function orderSet(buger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetchup(yn) {
                return function orderChicken(count) {
                    console.log("세트 : " + buger + ", " + beverage + ", " + side + ", 케첩(" + beverage + "),조각치킨(" + count + "개)");
                }
            }
        }
    }
}

let order = orderSet("치즈버거")("콜라");

order("프렌치후라이")("y")("2");


// const orderSet = buger => beverage => side => yn => count => {
// console.log("세트 : " + buger + ",    " + beverage + ",  " + side + ",  케찹(" + beverage + "),조각치킨(" + count + "개)");
// }

let args = [1, 3, 5];

function anyFnc(...args) {

}
let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2];
console.log(args.concat(another)); //앞에 있는 배열에다가 두개의 배열을 합치고싶습니다. (concat)

let obj1 = {
    name: 'Hong',
    age: 20,
    weight: 65.2
}
let newobj = {
    name: 'Choi',
    age: 15,
    height: 165.5
};
let obj3 = {
    sno: 12345
};
let obj2 = {
    ...newobj,
    ...obj1,
    ...obj3
}; //new object();

console.log(obj1, obj2);

let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{
        cname: '야옹이',
        age: 2
    }, {
        dname: '멍멍이',
        age: 3
    }]
}

comObj.sname; //이름
comObj.hobby[0]; //reading.
comObj.pet[0].age; //2살
comObj.pet[1].dname //멍멍이 이름 나옴

console.log(comObj.pet[1].dname);
console.log(comObj.pet[0], '취미 : ' + comObj.hobby[1], '이름 : ' + comObj.sname);

//나머지 파라메터의 활용

function restparms(...args) { // 파라메터를 args변수(배열)에담아 함수 내부로 넘김
    console.log(args);
}
restparms(1, 2, 3, 4)

//나머지 파라메터 사용 예

const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}

rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//나머지 파라메터로 합계구하기 예

function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    args.forEach(function (arg) {
        result += arg;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));

//나머지 파라메터로 합계 구하기 개선 예

const sum1 = (a, b, ...args) => {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b
    }
    result += args.length > 0 ? args.reduce((subsum, args) => subsum += args) : 0;
    return result;
}

console.log(sum1(1, 2, 3, 4));
console.log(sum1(1, 2));
console.log(sum1(1));


let multiply = (a, b, ...args) => {
    let result = a * b;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}
console.log(multiply(1, 2, 3, 4));

var a = 1;
var b = 5;

function outerFunc() {
    var b; //hoisting
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 3;
    a = 4;
    innerFunc();
    console.log(a);
    b = 2;
    console.log(b); //2
}

outerFunc();
console.log(b); //5