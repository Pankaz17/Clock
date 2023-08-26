
//for Main Clock

setInterval(() => {
    d = new Date();
    hrsTime = d.getHours();
    minTime = d.getMinutes();
    secTime = d.getSeconds();
    hrsrotation = 30 * hrsTime + minTime/2;
    minrotation = 6*minTime;
    secrotation = 6*secTime;

    hour.style.transform =`rotate(${hrsrotation}deg)`;
    minute.style.transform = `rotate(${minrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
    
}, 1000);

// console.log("Hello World");

//printing am pm
const am_pm = document.getElementById("ampm1")


    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();


    let newFormat = hours > 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours ? hours : 12;

    minutes = minutes<10 ? '0'+minutes : minutes;
    am_pm.innerHTML="Time:" + " " + hours + ":" + minutes + " " + newFormat;

    let currentDate = new Date();
    // let today = currentDate.getFullYear() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getDate(); 
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth()+1;
    let currentDay = currentDate.getDate();
    // Displaying full Date
    let newCurrentDate = currentYear + " / " + currentMonth + " / " + currentDay;
    // console.log(newCurrentDate);   
    document.getElementById("date").innerHTML = "Date:" + " " + newCurrentDate;
   // document.getElementById("date").style.color = "Blue";

// Displaying Date
    const day = new Date();
    let newDay = day.getDay();
   // console.log(newDay);

    const week = ["Sunday", "Monday", "tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

for(let i=0; i<week.length; i++){
    if(newDay === i){
        document.getElementById("day").innerHTML = "Day:" + " " + week[i];
        if(week[i] === "Friday"){
        document.getElementById("wish").innerHTML ="Good " + week[i] + " ! ! ! !";
        document.getElementById("wish").style.color = "Green";
        document.getElementById("wish").style.fontWeight = "Bolder";
        document.getElementById("wish").style.fontFamily = "Cursive";
        document.getElementById("wish").style.fontSize= "22px";
        }
        else if(week[i] === "Saturday"){

            // console.log("I love coding");
            document.getElementById("wish").innerHTML =" Happy " + week[i] +" ! "+" Wishing you an excellent day and a great time ahead."
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";
            document.getElementById("wish").style.fontSize= "22px";
        }
        else if(week[i] === "Sunday"){
            document.getElementById("wish").innerHTML ="Wishing you a very happy " + week[i];
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";
            document.getElementById("wish").style.fontSize= "22px";

        }
        else if(week[i] === "Monday"){
            document.getElementById("wish").innerHTML ="Wishing you a very happy " + week[i];
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";

        }
        else if(week[i] === "Tuesday"){
            document.getElementById("wish").innerHTML ="Wishing you a very happy " + week[i];
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";

        }
        else if(week[i] === "Wednesday"){
            document.getElementById("wish").innerHTML ="Wishing you a very happy " + week[i];
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";

        }
        else if(week[i] === "Thrusday"){
            document.getElementById("wish").innerHTML ="Wishing you a very happy " + week[i];
            document.getElementById("wish").style.color ="Green"; 
            document.getElementById("wish").style.fontWeight = "Bolder"; 
            document.getElementById("wish").style.fontFamily = "Cursive";

        }
        else{
            document.getElementById("wish").innerHTML = " ";
        }
    }
}