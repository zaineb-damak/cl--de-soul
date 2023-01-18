console.log(2); //to see if it's reading/working

const aboutContent = document.getElementsByClassName("nav-content");
console.log(aboutContent);

const aboutBtn = document.getElementsByClassName("about-btn");
console.log(aboutBtn);

const closeBtn = document.getElementsByClassName("close-btn");
console.log(closeBtn);

aboutBtn.addEventListener("click", ()=>{
    console.log("oi");
    aboutContent.classList.add("show");
    console.log("oi");
})