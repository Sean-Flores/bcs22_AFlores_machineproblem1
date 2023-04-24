
/*
	Program: Computation of Grades using Function
	Programmer: Alvin Sean D. Flores Jr.
	Section: BCS22
	Start Date: April 23, 2023
	End Dare: April 24, 2023
*/






for(i = 1; i <= 5; i++){

// prompt for name
let getName = prompt(`Enter name of student: `);

// prompt for 5 enabling assessments
let aeArray = [];
	for (let i = 1; i <= 5; i++) {
  	let ae = parseInt(prompt(`Enter enabling assessment ${i}: `));
  	aeArray.push(ae);
	}

// prompt for 3 summative assessments
let saArray = [];
	for (let i = 1; i <= 3; i++) {
  	let sa = parseInt(prompt(`Enter summative assessment ${i}: `));
  	saArray.push(sa);
}

// Prompt for major exam
let getMe = parseInt(prompt(`Enter major assessment : `));

// compute and average for total class participation
let computeCp = aeArray.reduce((total, ae) => total + ae, 0);
let avgCp = computeCp / 5;

// compute and average summative assessment
let computeSa = saArray.reduce((total, sa) => total + sa, 0);
let avgSa = computeSa / 3;

// average of total grade
let grade = (avgCp * 0.4) + (avgSa * 0.3) + (getMe * 0.4);

// determine the letter grade
let letterGrade = "";
	if (grade < 60){
		letterGrade = "F";	
	}else if (grade >= 60 && grade <=69) {
		letterGrade = "D";
	}else if (grade >= 70 && grade <=79) {
		letterGrade = "C";
	}else if (grade >= 80 && grade <= 89) {
		letterGrade = "B";
	}else if (grade >= 90 && grade <=100) {
		letterGrade = "A";
	}else {
		letterGrade = "No grade inputed. Please try again.";
	}


// create table data
const tableData = [
  { "Name Of Student": getName, "Class Participation": avgCp.toFixed(2), "Summative Assessment": avgSa.toFixed(2), "Exam Grade": getMe.toFixed(2), "Grade Score": grade.toFixed(2), "Letter Grade": letterGrade }
];

// display table in console
console.table(tableData);
}