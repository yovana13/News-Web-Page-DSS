function getToday(){
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

return today =  yyyy + '-' + mm + '-' + dd;}

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=5&apiKey=6a54ea6d505e4a55bc8dd72a6a7a231f` 

      fetch(new Request(url))
        .then((response) => {
          if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!!");
          }
          response.json().then((data) => {
            
            let users = data.articles;
            console.log(4);

            let i=0;
            for (let user of users) {
              

            document
                .getElementsByClassName("intro")[i].innerHTML = user.title;
            
             document
                .getElementsByClassName("intro")[i].setAttribute("href", user.url);

            document
                .getElementsByClassName("card")[i].style.backgroundImage = `url(${user.urlToImage})`;
                i=i+1;
                
            }
          });
        })
        .catch((err) => {
          console.log("the following error occured");
        });

       
      function categoryNews(category, letter)
      {
      const businesUrl = `${proxyUrl}https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&category=${category}&pageSize=3&apiKey=6a54ea6d505e4a55bc8dd72a6a7a231f` 
        fetch(new Request(businesUrl))
        .then((response) => {
          if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!!");
          }
          response.json().then((data) => {
            
            let users = data.articles;
            console.log(4);

            let i=0;
            for (let user of users) {
        

            document
                .getElementsByClassName(`${letter}-title`)[i].innerHTML = user.title;
            
             document
                .getElementsByClassName(`${letter}-title`)[i].setAttribute("href", user.url);

            document
                .getElementsByClassName(`${letter}-img`)[i].src = user.urlToImage;
                i=i+1;
                
            }
          });
        })
        .catch((err) => {
          console.log("the following error occured");
        });
      }
    
      
        categoryNews("business","b"); 
        categoryNews("sport","s");
        categoryNews("politics","p");
        categoryNews("technology","t");