  /*앞으로 괄호가있으면 메소드*/
  /*변수 자바랑은다르게 유연하게 설정가능 */
  // variable.js
  console.log('Hello , world!');
  document.write('<h3>Hello,world!!</h3>');

  let num = 0;
  num = 'Hello';
  num = 10;
  num = 'ten';
  num = true;
  num = null; /*object => class의 인스턴스*/

  console.log(num);

  let num1; /*아무것도 선언되어있지 않을때가 undefind*/
  console.log(typeof num1);

  num1 = 100;
  let num2 = 200; // 변수의 선언이 없이 사용 : 전역객체(window=자바에선 클래스)의 속성.
  console.log(num1 + num2);

  console.log(window);

  /*/window.alert('안녕하세요');윈도우에서 쓰는 경고창을 알려주는 함수*/


  // 변수 : 학생이름, 학생번호,영어,수학(여러개 담고싶을때)
  let student = new Object(); //object 선언
  student.sno = '22-0123';
  student.sname = '홍길동';
  student.engScore = 90;
  student.mathScore = 80;
  console.log(student);

  //변수초기화 할때
  let person = {
      fname: '김민수',
      age: 20,
      height: 175.5,
      showInfo: function () {
          return this.fname + ',' + this.age + ',' + this.height;
          //showInfo는 메소드호출 하는 방법이니 기억하길바람.
      }
  };

  person.weight = '68.5';

  console.log(person.fname); //특정 값만 가져오고 싶으면 .가져오면된다
  console.log(person.showInfo()); //특정 값 가져오는 방식 2
  console.log(person['age']); //특정 값 가져오는 방식 3

  let field = 'height';
  console.log(person[field]); //변수를 선언해서 가져올수도 있음.



  //전체속성(속성의 이름을 여기선 필드라고정함 (for문 안에서만 쓸수 있음))를 for  loop .. in
  //debugger; 디버그 하는방법 

  for (let field in person) {
      //펄슨이라는 오브젝트가 가지고있는 필드의 갯수 가져옴
      console.log(field, ' => ', person[field]);
  }
  console.log(field);

  // 변수 : me 라고하는 변수에다가 이름,취미,연락처,주소,소개:이름,취미,연락처 반환해주는 속성 선언


  let me = new Object(); //오브젝트 생성
  me.name = '박소현';
  me.hobby = '여행';
  me.phone = '010-1234-1234';
  me.adrees = '대구 북구 복현동';
  console.log(me);


  let me1 = {
      name: '박소현',
      hobby: '여행',
      phone: '010-1234-1234',
      adrees: '대구 북구 복현동',
      introduce: function () {
          return this.name + ',' + this.hobby + ',' + this.phone + ',' + this.adrees
      }

  }

  console.log(me1.introduce());

  /*for(let me in me1){
    console.log(me, '=>', me1[me]);
}
console.log(me);
console.log(me.hobby);*/