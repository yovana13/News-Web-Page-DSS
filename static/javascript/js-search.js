   
   function getData(url)
   {
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
            .getElementsByClassName("card-title")[i].innerHTML = user.title;
        
         document
            .getElementsByClassName("card-title")[i].setAttribute("href", user.url);

        document
            .getElementsByClassName("card-text")[i].innerHTML = user.description;
        
        document
            .getElementsByClassName("card-img-top")[i].setAttribute("src", user.urlToImage);

            i=i+1;
            
        }
      });
    })
    .catch((err) => {
      console.log("the following error occured");
    });


   }

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&pageSize=8&apiKey=6a54ea6d505e4a55bc8dd72a6a7a231f` 
    
        getData(url);
    
          

            window.onload = () => {
 
                let myBtn = document.getElementById('my-button');
                myBtn.onclick = function() {
                    let keyword = document.getElementById('form').value;

                  const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?q=${keyword}&sortBy=publishedAt&pageSize=8&apiKey=6a54ea6d505e4a55bc8dd72a6a7a231f` 
    
                 getData(url);
    
                }
            }