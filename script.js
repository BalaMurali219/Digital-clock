let hrs = document.getElementById("hrs")   
let min = document.getElementById("min")   
let sec = document.getElementById("sec")

setInterval(()=>{
    let presentTime = new Date();
    hrs.innerHTML = (presentTime.getHours()<10?"0":"") + presentTime.getHours();
    min.innerHTML = (presentTime.getMinutes()<10?"0":"") + presentTime.getMinutes();
    sec.innerHTML = (presentTime.getSeconds()<10?"0":"") + presentTime.getSeconds();
},1000)

let presentTime = new Date();
hrs.innerHTML = presentTime.getHours();
min.innerHTML = presentTime.getMinutes();
sec.innerHTML = presentTime.getSeconds();