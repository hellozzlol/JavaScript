//function_table.js


//테이블생성함수
function createTable(aryDate) {
    let fields = ['sname', 'age', 'height', 'weight']
    let tag = '<table border=1>';

    let head = createHead(fields); // <thead><tr><th>...</th></tr></thead>
    tag += head;


    let body = createBody(aryDate); // <tbody><tr><td>값</td>..</tr></tbody>
    tag += body;
    tag += '</table>'
    //<table>..</table>
    return tag;

}

//헤더부분함수
function createHead(f1) {
    // this.tag = '<table > <tr>';
    // for (let field in this.fields) { //{sname : 'Hong',age:15}
    //     this.tag += '<th>' + field + '</th>';
    // };
    // this.tag += '</tr>';
    // this.tag += '</table>'
    // let head = createTable();
    // return this.tag;
    let f2 = f1;

    let str = '<thead><tr>';
    f2.forEach(elem=>{
        
            str += '<td>'+elem+'</td>'}
    );
    str += '</tr></thead>'
   return str;
}


//바디부분 함수

function createBody(b1) {
    let str = '<tbody>';
    for(let elem of b1){
        str+='tr';
        for(let field in elem){
            str += '<td>' +elem[field]
        }
        str +='</tr>'
    }
    return str;
}




let data = [{
        sname: '홍길동',
        age: 15,
        heigth: 165,
        weight: 50
    },
    {
        sname: '이찬희',
        age: 20,
        heigth: 168,
        weight: 49
    },
    {
        sname: '손현우',
        age: 28,
        heigth: 165,
        weight: 55
    }
]


let str = createTable(data);

document.write(str);

