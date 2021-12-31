const hour=document.querySelector('#hour')
const min=document.querySelector('#min')
const sec=document.querySelector('#sec')
const btn=document.querySelector('#btn')
const animate =document.querySelector('.animate');
const invisible=document.querySelector('.invisible');
const timer=()=>{

    console.log("timer start....");
    let target=new Date("2022 ,01 ,01 ,00:00:00").getTime()
    let curdate =new Date().getTime()
    let diff=target-curdate
    let days=Math.floor(diff/(1000*60*60*24));
    let hours=Math.floor(diff%(1000*60*60*24)/(1000*60*60))
    let minutes=Math.floor(diff%(1000*60*60)/(1000*60))
    let second=Math.floor(diff%(1000*60)/(1000))
    hour.innerHTML=`${hours}`;
    min.innerHTML=`${minutes}`;
    sec.innerHTML=`${second}`;
    if (diff==0) {
        animate.classList.toggle('invisible');
    }
}
animate.classList.add('invisible');
btn.addEventListener('click',()=>{
    animate.classList.toggle('invisible');
})
setInterval(timer,1000);




