

function buildGetRequest() {
    var performance = document.getElementsByName("performance");
    var first_name_1 = document.getElementsByName("first_name_1");
    var last_name_1 = document.getElementsByName("last_name_1");
    var student_id_1 = document.getElementsByName("student_id_1");
    var first_name_2 = document.getElementsByName("first_name_2");
    var last_name_2 = document.getElementsByName("last_name_2");
    var student_id_2 = document.getElementsByName("student_id_2");
    var skill = document.getElementsByName("skill");
    var instrument = document.getElementsByName("instrument");
    var location = document.getElementsByName("location");
    var room = document.getElementsByName("room");
    var time_slot = document.getElementsByName("time_slot");
    var getRequestString = "performance=" + performance[0].value + "&first_name_1=" + first_name_1[0].value + "&last_name_1=" + last_name_1[0].value + "&student_id_1=" + student_id_1[0].value + "&first_name_2=" + first_name_2[0].value + "&last_name_2=" + last_name_2[0].value + "&student_id_2=" + student_id_2[0].value + "&skill=" + skill[0].value + "&instrument=" + instrument[0].value + "&location=" + location[0].value + "&room=" + room[0].value + "&time_slot=" + time_slot[0].value;

    return getRequestString;

}

function isDuet() {
    var performance = document.getElementsByName("performance");
    var first_name_2 = document.getElementsByName("first_name_2");
    var last_name_2 = document.getElementsByName("last_name_2");
    var student_id_2 = document.getElementsByName("student_id_2");

    if (performance[0].value != "Duet") {
        first_name_2[0].style.display = "none";
        first_name_2[0].required = false;
        last_name_2[0].style.display = "none";
        last_name_2[0].required = false;
        student_id_2[0].style.display = "none";
        student_id_2[0].required = false;
    }
    else {

        first_name_2[0].style.display = "inline";
        first_name_2[0].required = true;
        last_name_2[0].style.display = "inline";
        last_name_2[0].required = true;
        student_id_2[0].style.display = "inline";
        student_id_2[0].required = true;
    }
}

function ajaxRequest() {

    var performance = document.getElementsByName("performance");
    var first_name_1 = document.getElementsByName("first_name");
    //console.log(first_name_1[0].value);
    var last_name_1 = document.getElementsByName("last_name");
    var student_id_1 = document.getElementsByName("student_id");
    var first_name_2 = document.getElementsByName("first_name_2");
    var last_name_2 = document.getElementsByName("last_name_2");
    var student_id_2 = document.getElementsByName("student_id_2");
    var skill = document.getElementsByName("skill");
    var instrument = document.getElementsByName("instrument");
    var location = document.getElementsByName("location");
    var room = document.getElementsByName("room");
    var time_slot = document.getElementsByName("time_slot");
    var getRequestString = "performance=" + performance[0].value + "&first_name="
        + first_name_1[0].value + "&last_name=" + last_name_1[0].value + "&student_id="
        + student_id_1[0].value + "&first_name_2=" + first_name_2[0].value + "&last_name_2="
        + last_name_2[0].value + "&student_id_2=" + student_id_2[0].value + "&skill="
        + skill[0].value + "&instrument=" + instrument[0].value + "&location="
        + location[0].value + "&room=" + room[0].value + "&time_slot=" + time_slot[0].value;

    //console.log(getRequestString);
    const xhttp = new XMLHttpRequest();
    console.log(getRequestString);

    xhttp.open("GET", "./assign13.php?" + getRequestString, true);
    xhttp.send();
}

function buildTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const myObj = JSON.parse(this.responseText);
        var tableString = "<tr><th>Performance</th><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Second Student First Name</th><th>Second Student Last Name</th><th>Second Student Student ID</th><th>Skill</th><th>Instrument</th><th>Location</th><th>Room</th><th>Time Slot</th></tr>";
        for (let i = 0; i < myObj.length; i++) {

            tableString += "<tr><td>" + myObj[i].performance + "</td><td>" + myObj[i].first_name + "</td><td>" + myObj[i].last_name + "</td><td>" + myObj[i].student_id + "</td>";

            tableString += "<td>" + myObj[i].first_name_2 + "</td><td>" + myObj[i].last_name_2 + "</td><td>" + myObj[i].student_id_2 + "</td>";

            tableString += "<td>" + myObj[i].skill + "</td><td>" + myObj[i].instrument + "</td><td>" + myObj[i].location + "</td><td>" + myObj[i].room + "</td><td>" + myObj[i].time_slot + "</td></tr>";
        }
        document.getElementById("registry").innerHTML = tableString;
    }

    xhttp.open("GET", "./data/data.json", true);
    xhttp.send();

}

