

document.querySelector(".humburger").addEventListener("click",()=>{
    console.log("no");
    document.querySelector(".navigation").classList.toggle("clicked");
    
});
window.addEventListener("scroll",()=>{
    x=window.scrollY;
    y=document.documentElement.scrollHeight-window.innerHeight;
    document.querySelector(".head").classList.add("scrolled");
   
})
document.querySelector(".head").classList.remove("scrolled");