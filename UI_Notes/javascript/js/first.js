var student = {name:undefined,marks:100,passStatus:true};
document.write(student.name+"<br>"+student.marks+"<br>"+student.passStatus+"<br>")

var tempFahrenheit = 99;
const THIRTYTWO = 32;
const TMP = 1.8;
const NORMAL_FAHREN = 98.6;
tempCelsius = (tempFahrenheit - THIRTYTWO) / TMP;
var fever = tempFahrenheit > NORMAL_FAHREN;
document.write(tempCelsius+"\t"+fever);