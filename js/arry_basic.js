//arry_basic;

let arr = [] //new Array();
arr[0] = 'Hello';
arr[1] = 100
arr[2] = true;

delete arr[1];

console.log(arr.length);

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//확장 for

for (let val of arr) {
    console.log(val);
}
//forEach
arr.forEach((val, idx) => {
    console.log(`${idx}=>${val}`); //배열의 값 undefined  이면 반복에서 제외.
});
console.clear();
arr.push('Apple'); //추가.
arr.unshift('Banana'); //추가.
arr.pop(); //마지막 삭제
arr.shift(); //첫번째 삭제.
arr.splice(0,1,'Apple');//추가,수정,삭제.(대체할 값을 안넣어주면 삭제)




arr.forEach((val, idx) => {
    console.log(`${idx}=>${val}`); //배열의 값 undefined  이면 반복에서 제외.
});

