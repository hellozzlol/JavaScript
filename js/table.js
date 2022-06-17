//table.js
let data = [{
    sname: 'Hong',
    age: 15,
    heigth: 165,
    weight: 50
},
{
    sname: 'Hwang',
    age: 20,
    heigth: 168,
    weight: 49
},
{
    sname: 'Park',
    age: 28,
    heigth: 165,
    weight: 55
}

]

class Table {
// 생성자.
constructor(ary) {
    this.aryData = ary;
}
//메소드.
createTable() {
    this.tag = '<table border=3> <tr>';
    //헤더 정보.<thead>...</thead>
    for (let field in this.aryData[0]) { //{sname : 'Hong',age:15}
        this.tag += '<th>' + field + '</th>';
    };
    this.tag += '</tr>';
    this.tag += '';


    //바디 정보.<tbody>...</tbody>

    this.aryData.forEach((val, idx) => {
        //console.log(val);
        this.tag += '<tr>';
        for (let field in val) {
            this.tag += '<td>' + val[field] + '</td>';

        }
        this.tag += '</tr>';
    })
    this.tag += '</table>';

    return this.tag;
}

}

let table = new Table(data);

let str = table.createTable();
table.createTable(); // => 표형식으로 화면출력
console.log(str)
document.write(str);

let names = ['Hong', 'Hwang', 'Kim', 'Park'];

let serachName = names.find(function (val) {
return val.length == 4; // true => 반환.
});
console.log(serachName);