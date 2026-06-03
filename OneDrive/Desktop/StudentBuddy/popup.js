document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("attendanceBtn")
        .addEventListener("click", calculateAttendance);

    document.getElementById("cgpaBtn")
        .addEventListener("click", calculateCGPA);

    document.getElementById("startBtn")
        .addEventListener("click", startTimer);

    document.getElementById("pauseBtn")
        .addEventListener("click", pauseTimer);

    document.getElementById("resetBtn")
        .addEventListener("click", resetTimer);

    updateTimer();
});

function calculateCGPA() {

    let gpa1 = parseFloat(document.getElementById("gpa1").value) || 0;
    let gpa2 = parseFloat(document.getElementById("gpa2").value) || 0;
    let gpa3 = parseFloat(document.getElementById("gpa3").value) || 0;

    let count = 0;
    let total = 0;

    if (gpa1 > 0) {
        total += gpa1;
        count++;
    }

    if (gpa2 > 0) {
        total += gpa2;
        count++;
    }

    if (gpa3 > 0) {
        total += gpa3;
        count++;
    }

    if (count === 0) {
        alert("Enter GPA values");
        return;
    }

    let cgpa = total / count;

    document.getElementById("cgpaResult").textContent =
        "CGPA = " + cgpa.toFixed(2);
}

function calculateAttendance() {

    let attended = parseFloat(document.getElementById("attended").value);
    let total = parseFloat(document.getElementById("total").value);

    if (isNaN(attended) || isNaN(total) || total === 0) {
        alert("Enter valid values");
        return;
    }

    let percentage = (attended / total) * 100;

    document.getElementById("attendanceResult").textContent =
        "Attendance = " + percentage.toFixed(2) + "%";
}

/* Pomodoro Timer */

let timeLeft = 25 * 60;
let timer = null;

function updateTimer() {
    const timerDisplay = document.getElementById("timer");

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {

    if (timer) return;

    timer = setInterval(() => {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Pomodoro Session Complete!");
        }

    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateTimer();
}