//function_construct.js



//객체생성

function Student(sno, sname, age) {
    this.sno = sno;
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은' + this.sname + ', 나이는' + this.age;
    }
}

let s1 = new Student('22-1111', '김스타', 29);
let s2 = s1;
s2.sno = '22-2222'
console.log(s1.showInfo());


function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];
    this.createTable = function () {
        this.tag += '<table border=1>'
        this.createHead();
        this.createbBody();
        this.tag += '</table>';

        return this.tag;

    }

    this.createHead = function () {
        this.tag += '<thead><tr>';
        let str = this.tag;
        //this.fields.forEach();

        //this.fields.forEach((elem)=>{
        // this.tag += '<th>'+elem+'</th>';
        // }

        for (let field in this.fields) {
            // console.log(fields);
            str += '<th>' + this.fields[field] + '</th>';
        }
        this.tag = str;
        this.tag += '</tr></thead>';
        console.log(this.tag);

    }

    this.createbBody = function () {
        this.tag += '<tbody>';
        this.data.forEach(elem => {
            this.tag += "<tr>";
            for (let field in elem) {
                this.tag += '<td>' + elem[field] + '</td>';
            }
            this.tag += "<tr>";
        })
        this.tag += '</tbody>';

    }
}


// function() {this => window} / new 함수 => this:객체(object),/이벤트 => this: 이벤트대상

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

let t1 = new Table(data);
let str = t1.createTable();
console.log(str);
document.write(str);