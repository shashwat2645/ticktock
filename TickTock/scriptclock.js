let is24hour = false;
let format = "format_12";
const m12hour = "12-hr";
const m24hour = "24-hr";



function getTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = null;

    if(minutes<10) minutes = "0" + minutes;
    if(seconds<10) seconds = "0" + seconds;

    if(format == "format_12"){
        let am_pm = "AM";
        if(hour>=12){
            hour -= 12;
            am_pm = "PM";
        }
        else if (hour<10) hour = "0" + hour;
        if(hour == 0) hour = 12;

        time = hour + ":" + minutes + ":" + seconds + " " + am_pm;
    }
    else{

        if(hour<10) hour = "0" + hour;
        time = hour + ":" + minutes + ":" + seconds;

    }


    document.getElementById('time').innerHTML = time;
    setTimeout(getTime, 1000);
}


function year() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daynames = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
    
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let daynm = date.getDay();
    
    document.getElementById('year-details').innerHTML = "on " + daynames[daynm] + ", " + monthNames[month] + " " + day + ", " + year; 
    
}

function greet(){
    let hour = new Date().getHours();
    let box = document.getElementById('greet-msg');
    let leave = document.getElementById('leave');
    if (hour>=0 && hour<12) {
        box.innerHTML = "Good Morning!";
    }
    else if (hour>=12 && hour<17) {
        box.innerHTML = "Good Afternoon!";
    }
    else if (hour>=17){ 
        box.innerHTML = "Good Evening!";
    }
    
}

setInterval(year, 1000);
setInterval(greet, 1000);

function toggleFormat() {
    if(format=="format_12"){
        format="format_24";
        document.getElementById('hrformat').innerText=m12hour;
    }
    else{
        format="format_12";
        document.getElementById('hrformat').innerText=m24hour;
    }
}

     