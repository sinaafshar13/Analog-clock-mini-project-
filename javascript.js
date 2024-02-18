let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');
let deg = 6;

setInterval(clockHandler , 1000);

function clockHandler() {
    let d = new Date();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let h = d.getHours();
    sec.style.transform = `rotateZ(${s*deg}deg)`;
    min.style.transform = `rotateZ(${m*deg}deg)`;
    hour.style.transform = `rotateZ(${h*30 + m*6/12}deg)`;
}
