// ? studentList === 학생들 이름목록
// ? length === 길이값, 총원

let studentList = ["오승민", "승민", "오민"]

for(let i = 0; i < studentList.length; i++) {
  // 학생 목록에 i번째와 오승민이 일치할 때
  if(studentList[i] === "오승민") {
    console.log("나는" + studentList[i] + "이다!");
  } else {
    console.log(studentList[i]);
  }
}