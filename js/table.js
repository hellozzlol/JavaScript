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








class Estimate {
    constructor(param) {
        this.unit = param;
    }
    //견적가 얻기 메서드

    getEstimate(unittype, width, heigth) {
        let priceinfo = this.unit.find(item => item.type == unittype);
        return priceinfo.price * width * heigth;

    }
    //배열에 요소 추가 메서드
    addUnit(unit) {
        this.unit.push(unit);
    }
    
}
let unitinfo1 = [{
    type: "wood",
    price: 100
}, {
    type: "iron",
    price: 300
}, {
    type: "plastic",
    price: 200
}];
const estimator = new Estimate(unitinfo1);
estimator.addUnit({type : 'glass' , price:500});//새로운단위추가



let result = estimator.getEstimate('plastic', 20, 20);
console.log(result);


//object 타입으로 기능.

let obj ={};

obj.unit = unitinfo1;
obj.getEstimate = function(unittype,width,height){
let priceinfo =this.unit.find(item=>item.type == unittype);
return priceinfo.price*width*height;
}
obj.addUnit = function(unit){
    this.unit.push(unit);
}

let result1 = obj.getEstimate('wood',20,20)
console.log(result1);