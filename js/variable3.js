// variable3.js




let str = ''
str += '<table>'
str = '<table border=1>';
let num = 2;
for (let j = 1; j <= 9; j++) {

    str += '<tr>'
    str += '<tr>' + num + '</td><td>*</td><td>' + j + '</td><td>' + (num * j) + '</td>';
    str += '</tr>'
}
str += '</table>'

//달력.
let mon = 3;


let days = ['일', '월', '화', '수', '목', '금', '토'];
str += '<table>'
str = '<table border=1><caption>' + mon + '월 달력 </caption>';

for (let day of days) {
    str += '<th>' + day + '</th>';
}
str += '<tr>'
let vtd = getFirstDay(7); //4
for (let i = 1; i < vtd; i++) {
    str += '<td></td>';
}



for (z = 1; z <= getLastDate(mon); z++) {
    str += '<td>' + z + '</td>';
    if ((vtd - 1 + z) % 7 == 0) { //7의배수
        str += '</tr><tr>';
    }
}


str += '</tr></table>'
console.log(str)
document.write(str);

console.log(getFirstDay(6));

function getLastDate(mon) {
    //1,3,5,7,8,10,12 => 31
    //4,6,9,11 => 30
    //2=>28
    switch (mon) {
        case 1:
            return 31;
        case 2:
            return 28;
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;


    }
}

function getFirstDay(mon) {
    switch (mon) {
        case 1:
            return 7;
        case 6:
            return 4;
        case 7:
            return 6;
        default:
            0;
    }
}