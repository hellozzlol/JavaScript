//for_loop.js

//배열관련 반복되는 메소드
//forEach: void, map:[배열] A-> A',filter : [배열] A->B, reduce : 문자열,Number,[배열], {}

let ary = [3, 5, 8, 9, 12]; //배열객체 선언 : new Array();
ary.push(5); //배열객체에 값을 담는다//배열제거는 pop()
ary.unshift(7); //배열객체에 (맨앞쪽에)새로운 배열요소를추가하는것//shift();
//7,3,5,8,9,12,5
ary.splice(3, 1) //대체 값을 안넣어주면 없는 값으로 생각하고 삭제 //7,3,5,9,12,5

//ary.forEach(elem => console.log(elem));//메소드 괄호안에는 콜백함수

let newAry = [];
//1.forEach
let result = ary.forEach(firstCallBack);

function firstCallBack(elem) {
    // console.log(elem);
    newAry.push(elem) //새로운 뉴어레이라는 변수생성해서 elem에다가 값을 담겠습니다

}

//2.map//새로운 값을 반환
result = ary.map(elem => elem * 2); //A -> A'(A * 2 )같은말
//map을 하게 되면 newAry에 있는 같은 값이 들어옴 elem은 변수기 땜에 내가 정하면 된다
console.log(newAry);

//3.filter A->a

//result = ary.filter((elem,ind,ary) => elem % 2 ==0);//짝수만 result에 새로 담겠습니다.
result = ary.filter((elm, ind, ary) => ind > 3); //3보다 큰 값만 result에 새로 담겠습니다.

//4. reduce A-> 문자열, Number,[],{}
result = ary.reduce((accum, curr, currIdx, arry) => {
    console.log(accum, curr, currIdx) //accum 초기값 ,curr배열요소값 curridx인덱스값
    return accum + curr; //초기값 쓰고싶으면 리턴하면된다.
}, 0); //각각어레이에대한 누적값을 담고싶습니다

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2); //현재값을 담지말고 *한 값을 넣겠습니다
    return accum //누적된 값을 그다음 초기값을 넣겠습니다.
}, []);

; //2.map 같은기능.
result = ary.reduce((accum,curr,currIdx)=>{
if(currIdx>3){
    accum.push(curr*2);
}//3보다 큰 녀석을 곱하기 2해서 (return)그 값을 초기값으로 쓰겠습니다
return accum;
},[]); // filter, map 두번째 매개변수로 쓰겠습니다..?
console.log(result);