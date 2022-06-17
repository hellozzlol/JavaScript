//object_table.js

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