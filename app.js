let range=document.querySelector("#progress-bar");
console.log(range)

range.addEventListener('click',()=>{
    let disp=document.querySelector(".curr-time");

    disp.innerHTML=`${range.value}%`; 
})

