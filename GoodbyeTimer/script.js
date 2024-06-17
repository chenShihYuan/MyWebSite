function countdown(endDate) {
    
    let days, hours, minutes, seconds;
    endDate = new Date(endDate).getTime();
    console.log(endDate);
    if (isNaN(endDate)) {
        console.log("isNaN");
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        console.log("go");
        let startDate = new Date().getTime();

        let timeRemaining = parseInt((startDate - endDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }
}

// 設置離職日期
let endDate = "2024-06-14 18:00:00";
countdown(endDate);
