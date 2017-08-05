var updateFreq_ms= 1000
var day = new Date();
var currMinute = day.getMinutes();

function setCustomMessage(inputMessage){
    var now = new Date();
    var hours = now.getHours()>12 ? now.getHours() - 12 : now.getHours();
    scheduleText.innerHTML = hours + ":" +now.getMinutes() + "<br>" + inputMessage 
}

var events = new Array(7);

(function createEmptyTimeArray(){
    for(i = 0;i<7;i++){
        events[i] = new Array(2400);
        for(j=0;j<2400;j++){
            events[i][j] = "Free Time";            
        }
    }
})()


var dayIndex = new Object();
dayIndex.sun = 0;
dayIndex.mon = 1;
dayIndex.tues = 2;
dayIndex.wed = 3;
dayIndex.thur = 4;
dayIndex.fri = 5;
dayIndex.sat = 6;
dayIndex.schoolDays = 10;

function addEvent(dayIndex,startTime,endTime,description){
    if(dayIndex==10){
        for(i = 1; i < 6;i++){
            addEvent(i,startTime,endTime,description);            
        }       
    } else {
        for(j=startTime;j<endTime;j++){
            events[dayIndex][j] = description;
        }        
    }
}

addEvent(dayIndex.sun,1100,"Church");
addEvent(dayIndex.schoolDays,700,715,"Wakeup!");
addEvent(dayIndex.schoolDays,715,730,"Shower");
addEvent(dayIndex.schoolDays,730,750,"Breakfast");
addEvent(dayIndex.schoolDays,750,800,"Make Lunch");
addEvent(dayIndex.schoolDays,800,830,"Leave for School");
addEvent(dayIndex.schoolDays,830,1440,"School");
addEvent(dayIndex.sat,1800,1900,"Test Successful");

function updateClock() {

    var day = new Date();
    var today = day.getDay();
    var hour = day.getHours();
    var minutes = day.getMinutes();
    var totalMinutes = (hour*100)+minutes;
    var scheduleOutput = events[today][totalMinutes];
    
    setCustomMessage(scheduleOutput);
    
    console.log("checking")
    if(minutes==currMinute+1){
        updateFreq_ms=60000    
        console.log("updated")        
    }
    setTimeout(updateClock, updateFreq_ms);
}

updateClock();