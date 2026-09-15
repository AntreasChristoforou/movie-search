const titleinput = document.querySelector("#titlesearch");
const show = document.querySelector("#searchresults");
const button = document.querySelector("#Cbutton");

 button.addEventListener("click" , () => {
    
show.innerHTML = "";
moviesearch(titleinput.value).then(movies => {

    for(const s of movies){
    const divel = document.createElement("div");
    const divel2 = document.createElement("div");
    const divel3 = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const year = document.createElement("p");
    year.textContent = s.Year;
    img.src = s.Poster;
    img.alt = s.Title;
    title.textContent = s.Title;
    divel.className = "card";
    divel3.className = "content";
    divel.append(divel2);
    divel.append(divel3);
    divel2.append(img);
    divel3.append(title);
    divel3.append(year);
    show.append(divel);
}
});

 } )

async function moviesearch(title) {
    try{
       
        const res = await fetch(`https://www.omdbapi.com/?apikey=eba8f620&s=${title}`);
         if (!res.ok) throw new Error(`HTTP ${res.status}`);
         const data = await res.json();
         return data.Search;
    }
    catch (err) {
    console.log("Something went wrong:", err.message);
    return null;
  }
    
}

