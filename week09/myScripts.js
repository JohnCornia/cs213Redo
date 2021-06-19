function getCountryFile(value) {
  //console.log("./" + value.options[value.selectedIndex].value + ".txt");
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("countries").innerHTML = this.responseText;
    }
  xhttp.open("GET", "./" + value.options[value.selectedIndex].value + ".txt", true);
  xhttp.send();
}

function display(studentInfo){
  const myObj = JSON.parse(studentInfo);
  var tableString = "<th>First Name</th><th>Last Name</th><th>City</th><th>State</th><th>Zip</th><th>Major</th><th>GPA</th>";
  for (let index = 0; index < (myObj.students.length); index++) {
    
    tableString = tableString + "<tr><td>" + myObj.students[index].first + "</td>" 
    + "<td>" + myObj.students[index].last + "</td>"
    + "<td>" + myObj.students[index].address.city + "</td>"
    + "<td>" + myObj.students[index].address.state + "</td>"
    + "<td>" + myObj.students[index].address.zip + "</td>"
    + "<td>" + myObj.students[index].major + "</td>"
    + "<td>" + myObj.students[index].gpa + "</td></tr>"
    
  }
  document.getElementById("students").innerHTML = tableString;
}

function getStudentInfo(){
  var fileName = document.getElementById("fileName").value;
  //console.log(fileName);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    display(this.responseText);
    }
  xhttp.open("GET", "./" + fileName, true);
  xhttp.send();
}