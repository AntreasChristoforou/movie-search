const titleinput = document.querySelector("#titlesearch");
const show = document.querySelector("#searchresults");
 

moviesearch("batman").then(movies => {

    for(const s of movies){
    const li = document.createElement("li");
    li.textContent = s.Title;
    show.append(li);
}
});


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

