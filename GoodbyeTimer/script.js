function countdown(endDate,reverse) {
    
    let days, hours, minutes, seconds;
    endDate = new Date(endDate).getTime();
    console.log(endDate);
    if (isNaN(endDate)) {
        console.log("isNaN");
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date().getTime();
        reverse = reverse || false;
        let timeRemaining;
        if(reverse) {
            timeRemaining = parseInt((endDate - startDate) / 1000);
        }
        else {
            timeRemaining = parseInt((startDate - endDate) / 1000);
        }
        
        if (timeRemaining >= 0) {
            
            let dayCount = 86400;
            let yearCount = dayCount * 365;

            years = parseInt(timeRemaining / yearCount);
            timeRemaining = (timeRemaining % yearCount);
            days = parseInt(timeRemaining / dayCount);
            timeRemaining = (timeRemaining % dayCount);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);
            
            if(document.getElementById("years") != null)
            {
                document.getElementById("years").innerHTML = parseInt(years, 10);    
            }
            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }
}
