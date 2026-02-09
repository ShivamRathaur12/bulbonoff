btn1=document.querySelector(".btn1");
btn2=document.querySelector(".btn2");
img=document.querySelector("img");
h1=document.querySelector("h1");
btn1.addEventListener("click",()=>{
    
    img.src="lighton.png";
    h1.innerText="BULB IS ON";
})
btn2.addEventListener("click",()=>{
    
    img.src="lightoff.png";
    h1.innerText="BULB IS OFF";
})