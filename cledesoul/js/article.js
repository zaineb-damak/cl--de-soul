console.log("article.js");

/////////////////////////////////////////////////////////////////ABOUT

var aboutBtn = document.querySelector('#btn');
var closeBtn = document.querySelector('#close-btn');
var aboutContent = document.querySelector('#nav-content');

aboutBtn.addEventListener('click', function() {
  console.log("abre");
  aboutContent.classList.add("show");
});

closeBtn.addEventListener('click', function() {
    console.log("fecha");
    aboutContent.classList.remove("show");
  });

/////////////////////////////////////////////////////////////////FETCH 

let url = new URL(window.location);
let params = new URLSearchParams(url.search);
let slug = params.get("slug");

async function fetchProjectJSON(slug) {
    const response = await fetch(
      "https://cledesoul-c52748.ingress-daribow.ewp.live/wp-json/wp/v2/articles?slug=" +
        slug
    );
    const project = await response.json();
    return project;
  }

/////////////////////////////////////////////////////////////////ARTICLE STUFF/VARIABLES
var songTitle = document.querySelector('.song-title');
var songAuthor = document.querySelector('.song-author');
var songLyrics = document.querySelector('.song-lyrics');

var songSett = document.querySelector('.song-settings');
var songConf = document.querySelector('.song-confession');

function getRandomInt(max) {
      return Math.floor(Math.random() * max);
}  

/////////////////////////////////////////////////////////////////+FETCH

fetchProjectJSON(slug).then((project) => {
    console.log(project); 

    /////////////////////////////////////////////////////////////////ARTICLE-LEFT-SIDE

    let h = document.createElement("h2");
    h.setAttribute("class", "text");
    let textS = document.createTextNode(project[0].title.rendered);
    h.appendChild(textS);
    songTitle.appendChild(h);

    let h2 = document.createElement("h2");
    h2.setAttribute("class", "text");
    let textA = document.createTextNode(project[0].acf.author);
    h2.appendChild(textA);
    songAuthor.appendChild(h2);
    
    let p = document.createElement("p");
    p.innerHTML = project[0].acf.lyrics;
    songLyrics.appendChild(p);

    /////////////////////////////////////////////////////////////////ARTICLE-RIGHT-SIDE

    let feel = document.createElement("h2");
    feel.setAttribute("class", "setting");
    let textFeel = document.createTextNode(project[0].acf.emotion);
    feel.appendChild(textFeel);
    songSett.appendChild(feel);

    let genre = document.createElement("h2");
    genre.setAttribute("class", "setting");
    let textGenre = document.createTextNode(project[0].acf.genre);
    genre.appendChild(textGenre);
    songSett.appendChild(genre);

    let user = document.createElement("h2");
    user.setAttribute("class", "setting");
    let textUser = document.createTextNode(project[0].acf.user+"'s Pick");
    user.appendChild(textUser);
    songSett.appendChild(user);

    let confess = document.createElement("p");
    confess.innerHTML = project[0].acf.confession;
    confess.setAttribute("class", "playfair");
    songConf.appendChild(confess);

    let im1 = document.createElement("img");
    im1.setAttribute("src", project[0].acf.img1);
    im1.setAttribute("class", "imgConf1");
    songConf.appendChild(im1);

    let im2 = document.createElement("img");
    im2.setAttribute("src", project[0].acf.img2);
    im2.setAttribute("class", "imgConf2");
    songConf.appendChild(im2);

    let im3 = document.createElement("img");
    im3.setAttribute("src", project[0].acf.img3);
    im3.setAttribute("class", "imgConf3");
    songConf.appendChild(im3);

    /////////////////////////////////////////////////////////////////MOVING PICTURES

    const slider=document.querySelector('.song-confession');

    /////////////////////////////////////////////////////////////////IMG1

    const thumb1=document.querySelector('.imgConf1');
    //console.log(thumb1);

    thumb1.onmousedown=(event)=>{

        const shiftX1 =event.clientX - thumb1.getBoundingClientRect().left;
            //console.log(shiftX);
        
            const shiftY1 =event.clientY - thumb1.getBoundingClientRect().top;
            //console.log(shiftY);
        
            const onMouseMove1 = (event) =>{
                let newLeft1 =event.clientX-shiftX1-slider.getBoundingClientRect().left;
                let newTop1 =event.clientY-shiftY1-slider.getBoundingClientRect().top;
        
                //if (newLeft<0){
                //    newLeft=0;
                //}
        
                if (newTop1<0){
                    newTop1=0;
                }
        
                let rightEdge1 = slider.offsetWidth-thumb1.offsetWidth;
                let topEdge1 = slider.offsetHeight-thumb1.offsetHeight;
        
                if (newLeft1 > rightEdge1) {
                    newLeft1 = rightEdge1;
                }
        
                if (newTop1 > topEdge1) {
                    newTop1 = topEdge1;
                }
              
                thumb1.style.left = newLeft1 + "px";
                thumb1.style.top = newTop1 + "px";
            };
        
            const onMouseUp1 = () => {
                document.removeEventListener("mousemove", onMouseMove1);
                document.removeEventListener("mouseup", onMouseUp1);
              };
        
              document.addEventListener("mousemove", onMouseMove1);
          document.addEventListener("mouseup", onMouseUp1);
        
     };
        
    thumb1.ondragstart = function () {
        return false;
    };

    /////////////////////////////////////////////////////////////////IMG2

    const thumb2=document.querySelector('.imgConf2');

    thumb2.onmousedown=(event)=>{

        const shiftX2 =event.clientX - thumb2.getBoundingClientRect().left;
            //console.log(shiftX);
        
            const shiftY2 =event.clientY - thumb2.getBoundingClientRect().top;
            //console.log(shiftY);
        
            const onMouseMove2 = (event) =>{
                let newLeft2 =event.clientX-shiftX2-slider.getBoundingClientRect().left;
                let newTop2 =event.clientY-shiftY2-slider.getBoundingClientRect().top;
        
                //if (newLeft<0){
                //    newLeft=0;
                //}
        
                if (newTop2<0){
                    newTop2=0;
                }
        
                let rightEdge2 = slider.offsetWidth-thumb2.offsetWidth;
                let topEdge2 = slider.offsetHeight-thumb2.offsetHeight;
        
                if (newLeft2 > rightEdge2) {
                    newLeft2 = rightEdge2;
                }
        
                if (newTop2 > topEdge2) {
                    newTop2 = topEdge2;
                }
              
                thumb2.style.left = newLeft2 + "px";
                thumb2.style.top = newTop2 + "px";
            };
        
            const onMouseUp2 = () => {
                document.removeEventListener("mousemove", onMouseMove2);
                document.removeEventListener("mouseup", onMouseUp2);
              };
        
              document.addEventListener("mousemove", onMouseMove2);
          document.addEventListener("mouseup", onMouseUp2);
        
        };
        
        thumb2.ondragstart = function () {
            return false;
        };

    /////////////////////////////////////////////////////////////////IMG3
    
    const thumb3=document.querySelector('.imgConf3');

    thumb3.onmousedown=(event)=>{
    
        const shiftX3 =event.clientX - thumb3.getBoundingClientRect().left;
            //console.log(shiftX);
        
            const shiftY3 =event.clientY - thumb3.getBoundingClientRect().top;
            //console.log(shiftY);
        
            const onMouseMove3 = (event) =>{
                let newLeft3 =event.clientX-shiftX3-slider.getBoundingClientRect().left;
                let newTop3 =event.clientY-shiftY3-slider.getBoundingClientRect().top;
        
                //if (newLeft<0){
                //    newLeft=0;
                //}
        
                if (newTop3<0){
                    newTop3=0;
                }
        
                let rightEdge3 = slider.offsetWidth-thumb3.offsetWidth;
                let topEdge3 = slider.offsetHeight-thumb3.offsetHeight;
        
                if (newLeft3 > rightEdge3) {
                    newLeft3 = rightEdge3;
                }
        
                if (newTop3 > topEdge3) {
                    newTop3 = topEdge3;
                }
              
                thumb3.style.left = newLeft3 + "px";
                thumb3.style.top = newTop3 + "px";
            };
        
            const onMouseUp3 = () => {
                document.removeEventListener("mousemove", onMouseMove3);
                document.removeEventListener("mouseup", onMouseUp3);
              };
        
              document.addEventListener("mousemove", onMouseMove3);
          document.addEventListener("mouseup", onMouseUp3);
        
        };
        
        thumb3.ondragstart = function () {
            return false;
        };
    
    
  });

  