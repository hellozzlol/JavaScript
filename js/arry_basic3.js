//arry_basic3.js
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
{"id":15,"first_name":"Lennard","last_name":"Worton","email":"lwortone@squarespace.com","gender":"Male","salary":4034}]`;

let gender = prompt('Male or Female 을 입력');
console.log(gender);

let objAry = JSON.parse(data); //문자열 => 오브젝트
console.log(objAry);

//표 (table) 형태로 출력

let result = objAry.reduce(function (accum, curr, currIdx) {
    if (currIdx == 0) {
        accum += '<table border=1>';
    }
    if (curr.gender == gender) {//사용자 입력한 값과 동일한 성별
        accum += '<tr>';

        for (let field in curr) {//오브젝트 의 속성의 갯수만큼 생성
            accum += `<td>${curr[field]}</td>`
        }
    }

    accum += '</tr>';
    if (currIdx == objAry.length - 1) {
        accum += '</table>';
    }
    return accum
}, '');
console.log(result);
document.write(result);