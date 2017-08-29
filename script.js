genres={
    genre: "id",
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    science_fiction:878,
    tv_movie:10770,
    thriller:53,
    war: 10752,
    western:37 
}

function sendApiRequest() {
    console.log(document.getElementById("options").childNodes)
    var children=document.getElementById("options").childNodes.length
    for(var i=0; i<children; i++){
        document.getElementById("options").removeChild(document.getElementById("options").firstChild)
    }
    var api_key="ef1dddb6c8981bd4cc2a59e4273a743e"
    var userInput= document.getElementById("input").value
    var userInputSplit=userInput.split(" ")
    var userInputJoin=userInputSplit.join("_")
    console.log(userInputJoin)
    console.log(genres[userInputJoin])
    var movieApiUrl = `https://api.themoviedb.org/3/genre/${genres[userInputJoin]}/movies?api_key=ef1dddb6c8981bd4cc2a59e4273a743e&language=en-US&include_adult=false&sort_by=created_at.asc`
    fetch(movieApiUrl)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        console.log(json.results.length)
        for(var i=0; i<json.results.length; i++){
            //title iteration
            var titlePath = json.results[i].title
            
            var title = document.createElement("h3")
            title.innerHTML=titlePath
            document.getElementById("options").appendChild(title)
            
            //description iteration
            var descriptionPath=json.results[i].overview
            var description=document.createElement("p")
            description.innerHTML=descriptionPath
            description.style.marginLeft = "400px"
            description.style.marginRight = "400px"
            document.getElementById("options").appendChild(description)  
            
            //picture iteration
            var imgPath = json.results[i].poster_path
            var img = document.createElement("img")
            var picUrl=`http://image.tmdb.org/t/p/w300${imgPath}`
            img.setAttribute("src", picUrl)
            document.getElementById("options").appendChild(img)
        }
    })
    
}
