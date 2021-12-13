fetch("https://api.github.com/users/bettykroon/repos")
.then(function(response){
    return response.json();
})

.then(function(json){
    let githubrepos = document.getElementById("githubrepos");

    for(let i = 0; i < json.length; i++){
        githubrepos.insertAdjacentHTML("beforeend", "<a href='" + json[i].html_url + "' target='_blank'><div class='githubrepo'>" + json[i].name + "</div></a>")
    }
})