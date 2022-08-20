const url = '/data.json';
const day = document.querySelectorAll(".day");
const span = document.querySelectorAll("span");
const li = document.querySelectorAll("li");
const content = document.querySelectorAll(".content");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let today = weekday[d.getDay()].toLocaleLowerCase();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    for(let i = 0; i < data.length; i++) {
        if(data[i].day == li[i].textContent) {
            span[i].textContent = data[i].amount;
            day[i].style.height = `${Math.floor(data[i].amount) * 2}px`
        }
        
        if(today[0] + today[1] + today[2] == li[i].textContent) {
            day[i].style.backgroundColor = "rgb(118, 181, 188)";
        }

        day[i].addEventListener("mouseenter", () => {
            content[i].style.display = "flex";
            if(day[i].style.backgroundColor == "rgb(118, 181, 188)") {
                day[i].style.backgroundColor = "rgb(164, 220, 226)";
            } else {
                day[i].style.backgroundColor = "rgb(238, 155, 138)";
            }
        })

        day[i].addEventListener("mouseleave", () => {
            content[i].style.display = "none";
            if( day[i].style.backgroundColor == "rgb(164, 220, 226)") {
                day[i].style.backgroundColor = "rgb(118, 181, 188)"
            } else {
                day[i].style.backgroundColor = "rgb(236, 118, 95)";
            }
        })
    } 
}


getData();
