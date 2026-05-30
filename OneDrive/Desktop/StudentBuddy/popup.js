function calculateCGPA(){

    let gpa1 =
    parseFloat(
        document.getElementById("gpa1").value
    ) || 0;

    let gpa2 =
    parseFloat(
        document.getElementById("gpa2").value
    ) || 0;

    let gpa3 =
    parseFloat(
        document.getElementById("gpa3").value
    ) || 0;

    let count = 0;
    let total = 0;

    if(gpa1 > 0){
        total += gpa1;
        count++;
    }

    if(gpa2 > 0){
        total += gpa2;
        count++;
    }

    if(gpa3 > 0){
        total += gpa3;
        count++;
    }

    if(count === 0){

        alert("Enter GPA values");

        return;
    }

    let cgpa = total / count;

    document.getElementById(
        "cgpaResult"
    ).textContent =
    "CGPA = " +
    cgpa.toFixed(2);
}