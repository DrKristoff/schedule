var updateFreq_ms= 1000
var day = new Date();
var currMinute = day.getMinutes();

function setCustomMessage(inputMessage){
    scheduleText.innerHTML = inputMessage 
}

function updateClock() {
    var scheduleText = document.getElementById("scheduleText");
    scheduleText.innerHTML = "TEST"

    var day = new Date();
    var today = day.getDay();
    var hour = day.getHours();
    var minutes = day.getMinutes();
    
//School Day
if (today > 0 && today < 6) {
    if (hour == 6) {
        if (minutes > 30 && minutes < 40) {
            setCustomMessage("WAKE UP!");
        } else if (minutes>=40 && minutes < 50){
            setCustomMessage("Shower");
        } else if (minutes>=50){
            setCustomMessage("Get Dressed");
        }
    } else if (hour == 7) {
        if (minutes < 30) {
            setCustomMessage("Breakfast");
        } else if (minutes>=30){
            setCustomMessage("Make Lunch") ;         
        }
    }        
//Saturday
} else if (today == 6) {
    if (hour == 8) {
        if (minutes == 26) {
            scheduleText.innerHTML = "TEST 26"
        } else if (minutes == 27) {
            scheduleText.innerHTML = "TEST 27"
        } else if (minutes == 28) {
            scheduleText.innerHTML = "TEST 28"
        } else if (minutes == 29) {
            scheduleText.innerHTML = "TEST 29"
        } else if (minutes == 30) {
            scheduleText.innerHTML = "TEST 30"
        }
    }
//Church  
} else if (today == 0) {
    if (hour == 11) {
        if (minutes == 00) {
            scheduleText.innerHTML = "TEST 26"
        } else if (minutes == 30) {
            scheduleText.innerHTML = "TEST 27"
        }
    }
}

console.log("checking")
if(minutes==currMinute+1){
updateFreq_ms=60000    
console.log("updated")        
}
setTimeout(updateClock, updateFreq_ms);
}

updateClock();
console.log("test");