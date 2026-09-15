

const titleinput = document.querySelector("#titlesearch");
const show = document.querySelector("#searchresults");
const button = document.querySelector("#Cbutton");

button.addEventListener("click", () => {
    doSearch();
});
titleinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doSearch();
});


async function moviesearch(title) {
    
    try{
       
        const res = await fetch(`https://www.omdbapi.com/?apikey=eba8f620&s=${title}`);
         if (!res.ok) throw new Error(`HTTP ${res.status}`);
         const data = await res.json();
         return data.Search ?? [];
    }
    catch (err) {
    console.log("Something went wrong:", err.message);
    showmessage("Couldn't reach the server — check your connection");
    return [];
  }
    
}

function doSearch(){
    show.innerHTML = "";
    if(titleinput.value === ""){
        showmessage("Enter a movie title");
        return;
    }
    showmessage("Loading…");
moviesearch(titleinput.value.trim()).then(movies => {
    show.innerHTML = "";
     if(movies.length === 0){
        showmessage(`no results for "${titleinput.value}"`);
        return;
     }   
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
}

function showmessage(text){
    
    const showmess = document.createElement("p");
    showmess.className = "message";
    showmess.textContent = text;
    show.append(showmess);
}

