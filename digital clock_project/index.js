const seconds=document.getElementById('sec');
const minutes=document.getElementById('min');
const hours=document.getElementById('hr');

const updateTime=()=>{
    let date=new Date();
    let sec=date.getSeconds();
    let min=date.getMinutes();
    let hour=date.getHours();


hours.innerHTML= hour + ':';
minutes.innerHTML= min + ':' ;
seconds.innerHTML = sec  ;
}

setInterval( updateTime, 1000);
updateTime();
