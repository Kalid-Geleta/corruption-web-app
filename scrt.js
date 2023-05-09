
imgcontainer =document.querySelector(".imgcontainer");
imglist=document.querySelector(".imglist")
rightbutton=document.querySelector(".right_btn")
leftbutton=document.querySelector(".left_btn")
arrayimglist=Array.from(document.querySelector(".imglist").children);
imgitem=document.querySelector("imgitem");
navdots=document.querySelector(".navdots")
arraynavdots=Array.from(document.querySelector(".navdots").children)


document.querySelector(".humburger").addEventListener("click",()=>{
    console.log("no");
    document.querySelector(".navigation").classList.toggle("clicked");
    
});

imagewidth=arrayimglist[0].getBoundingClientRect().width;


arrayimglist.forEach((items,index)=>{
    items.style.left=index*imagewidth+"px";
    console.log(getComputedStyle(items).left);
})

rightbutton.addEventListener("click",()=>{
   
    currentimg=document.querySelector(".imgitem.current-img");
    currentdot=document.querySelector(".dot.current-img");
    nextimg=currentimg.nextElementSibling;
    nextdot=currentdot.nextElementSibling;
  
   
    imglist.style.transform="translateX(-"+getComputedStyle(nextimg).left
   
    currentimg.classList.remove("current-img");
    nextimg.classList.add("current-img");


    currentdot.classList.remove("current-img");
    nextdot.classList.add("current-img");
  
    

});

leftbutton.addEventListener("click",()=>{
   
    currentimg=document.querySelector(".imgitem.current-img");
    currentdot=document.querySelector(".dot.current-img");
    perviousimg=currentimg.previousElementSibling;
    prevdot=currentdot.previousElementSibling;
   
    imglist.style.transform="translateX(-"+getComputedStyle(perviousimg).left
   
    currentimg.classList.remove("current-img");
    perviousimg.classList.add("current-img");


    currentdot.classList.remove("current-img");
    prevdot.classList.add("current-img");
  
    

});


navdots.addEventListener("click",(e)=>{
    currentimg=document.querySelector(".imgitem.current-img");
    currentdot=document.querySelector(".dot.current-img");
    tar=e.target;
   ix= arraynavdots.findIndex((dot)=>{
  if(tar===dot){
    return true;
  }
    });
//    arraynavdots.forEach((f)=>{console.log(f)});
   console.log(ix);
    imglist.style.transform="translateX(-"+getComputedStyle(arrayimglist[ix]).left
    currentimg.classList.remove("current-img");
    arrayimglist[ix].classList.add("current-img");
    currentdot.classList.remove("current-img");
    arraynavdots[ix].classList.add("current-img");
    
   console.log(e.target)

});
// let i=0;
// while(true){
//     if(i=arrayimglist.length-1){
//         i=0;
//     }
    

// i++;
// }

console.log(navdots);


