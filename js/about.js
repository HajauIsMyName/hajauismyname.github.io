var birthDate = new Date("2008-05-18");
var age = document.getElementById("age");

age.textContent = getAge(birthDate);

function getAge(birthdate) {
    var today = new Date();

    var year = birthdate.getFullYear();
    var month = birthdate.getMonth();
    var day = birthdate.getDate();

    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
    }

    return age;
}