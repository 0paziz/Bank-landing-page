const ham=document.getElementById("ham");

const close=document.getElementById("close");

const ham_container= document.querySelector(".ham-menu");

ham_container.style.display="none";

ham.addEventListener("click", ()=>{
   close.style.display="block";
   ham.style.display="none";
    ham_container.style.display="flex";
});


close.addEventListener("click", ()=>{
    ham.style.display="block";
    close.style.display="none";
    ham_container.style.display="none";
});

