//for_loop2.js

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
{"id":15,"first_name":"Lennard","last_name":"Worton","email":"lwortone@squarespace.com","gender":"Male","salary":4034}]`

//1.forEach
let ary = JSON.parse(data);
//console.log(ary);
//forEach.
ary.forEach(elem => {
    if (elem.gender == 'Female') {
        console.log(elem)
    }
});
//let femaleAry = ary.filter(); //gender=='Female'
//console.log(femaleAry);
console.clear();
//2.map

let newCompany = ary.map(elem => { //elem : A
        let newElem = {} //newElem : A'
        newElem.nId = elem.id;
        newElem.name = elem.first_name + ',' + elem.last_name;
        newElem.salary = elem.salary * 1.5;
        newElem.isNew = elem.salary > 4000 ? false : true;
        return newElem; //새로운 엘리먼트를 반환하겠습니다.
    }) // A->A'
    .filter(elem => elem.isNew)
//.forEach(elem=> console.log(elem))
console.log(newCompany);



//3.reduce
console.log(newCompany)

//let result = newCompany.reduce(function add(sum, currValue
    //) => {
      // return sum+currIdx;
    //}, 0);
   //reduce 이해못함다시해야함.ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ.


