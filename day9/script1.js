async function fetchdata() {
    try{
    let response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
    let data = await response.json();
    let newdata = data.articles;
    newdata.forEach((element) => {
      let h1 = document.createElement("h1");
      h1.textContent = element.title;
      let a = document.createElement("a");
      a.textContent = element.title;
      a.setAttribute("href", element.html_url);
      let top = document.getElementById("div2");
      top.appendChild(h1);
      top.appendChild(a);
    }); 
    } 
    catch(error){
        console.log(error);
    }
  }