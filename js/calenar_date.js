//calender_date.js

let today = new Date('2022-06');

today = new Date(2022,5,21);
console.log(`올해는 ${today.getFullYear()} 년도`);
console.log(`이번달은 ${today.getMonth()+1} 월입니다.`);// getMonth는 0~11까지있음(0이 1월임 )
console.log(`오늘은 ${today.getDate()} 일입니다.`);
console.log(`오늘은 ${today.getDay()}`);//요일정보.0~6(0이 일요일임)

//달력 작성.6월작성 6월1일의 요일.6월의 마지막 날...

let year = 2022;// 2022년
let month = 6;//6월달


function makeCalendar(y, m) {
    let dayInfo = new Date(y, m - 1).getDay(); // 매개값으로 들어온 월의 요일.
    let lastDateInfo = new Date(y, m, 0).getDate(); // 마지막 날의 정보.
    // 년, 월 달력 정보 생성.
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption> [ ${y}년 ${m}월 ]</caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    for (let i = 0; i < dayInfo; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= lastDateInfo; i++) {
        str += '<td>' + i + '</td>';
        if ((dayInfo + i) % 7 == 0) { // 7의 배수.
            str += '</tr><tr>';
        }
    }
    str += '</tr></table>';
    document.write(str);
    console.log(str);
}



