// Q 01 


const totalSubjects = 3;
const maxMarksPerSubject = 100;
const totalMaxMarks = totalSubjects * maxMarksPerSubject;

let english = 85;
let math = 92;
let computer = 78;



let totalObtained = english + math + computer;
let percentage = (totalObtained / totalMaxMarks) * 100;

let result =
  percentage >= 80
    ? "Grade A<sup>+</sup>"
    : percentage >= 70 
    ? "Grade A"
    : percentage >= 40 
    ? "Grade B"
    : percentage >= 50 
    ? "Grade C"
    : percentage >= 40 
    ? "Grade D"
    : "Fail";

document.write(`
  <h2>Mark Sheet</h2>
  <p><b>English:</b> ${english}</p>
  <p><b>Math:</b> ${math}</p>
  <p><b>Computer:</b> ${computer}</p>
  <p><b>Total Marks:</b> ${totalObtained} / ${totalMaxMarks}</p>
  <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
  <p><b>Grade:</b> ${result}</p>
`);
