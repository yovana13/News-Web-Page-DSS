function getToday(){
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

return today =  yyyy + '-' + mm + '-' + dd;}

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const url = `${proxyUrl}https://newsapi.org/v2/everything?q=tesla&from=${getToday}&sortBy=publishedAt&pageSize=5&apiKey=6a54ea6d505e4a55bc8dd72a6a7a231f` 

      fetch(new Request(url))
        .then((response) => {
          if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!");
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