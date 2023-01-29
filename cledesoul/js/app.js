console.log("app.js");

/////////////////////////////////////////////////////////////////FETCH 

let url = new URL(window.location);
let params = new URLSearchParams(url.search);
let slug = params.get("slug");

async function fetchProjectsJSON() {
    const response = await fetch(
      "https://cledesoul-c52748.ingress-daribow.ewp.live/wp-json/wp/v2/articles"
    );
    const projects = await response.json();
    return projects;
  }

/////////////////////////////////////////////////////////////////HOMEPAGE STUFF
var content = document.querySelector('#content');
function getRandomInt(max) {
      return Math.floor(Math.random() * max);
}  

/////////////////////////////////////////////////////////////////FETCH + HOMEPAGE STUFF (ARTICLES)

fetchProjectsJSON().then((projects) => {
    console.log(projects); // fetched articles

    
    for (let i = 0; i < projects.length; i++) {
        
        let valor = getRandomInt(4);
        let margemEsq = valor *10 +2;

        //creating outter div that holds img + title
        let articleDiv = document.createElement("div");
        articleDiv.setAttribute("class", "article-div");
        articleDiv.style.marginLeft = margemEsq +"%";

        //creating img content
        let img = document.createElement("img");
        img.setAttribute("src", projects[i].acf.img1);
        img.setAttribute("class", "article-img");
        articleDiv.appendChild(img);

        //creating ttile content
        let h = document.createElement("h2");
        //p.innerHTML =projects[i].title.rendered;
        h.innerHTML =
          '<a href="article.html?slug=' +
          projects[i].slug +
          '" class= article-name>' +
          projects[i].title.rendered +
          "</a>";
        //h.setAttribute("class", "article-name");
        articleDiv.appendChild(h);

        //appending outter div to content in html
        content.appendChild(articleDiv);

        /*
      p = document.createElement("p");
      p.innerHTML =
        '<a href="project.html?slug=' +
        projects[i].slug +
        '">' +
        projects[i].title.rendered +
        "</a>";
      document.body.appendChild(p);
      */
    }
    
});

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

/////////////////////////////////////////////////////////////////ARTICLES AT HOMEPAGE
/*
var content = document.querySelector('#content');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 6; i++) {
  
    let valor = getRandomInt(4);
    //console.log(valor);
    let margemEsq = valor *10 +2;
    //console.log(margemEsq);

    //creating outter div that holds img + title
    let articleDiv = document.createElement("div");
    articleDiv.setAttribute("class", "article-div");
    articleDiv.style.marginLeft = margemEsq +"%";

    //creating img content
    let img = document.createElement("img");
    img.setAttribute("src", "image"+i, ".jpg");
    img.setAttribute("class", "article-img");
    articleDiv.appendChild(img);

    //creating ttile content
    let p = document.createElement("h2");
    p.innerHTML ="artigo" + i;
    articleDiv.appendChild(p);

    //appending outter div to content in html
    content.appendChild(articleDiv);
}
*/