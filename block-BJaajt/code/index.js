const image = document.querySelector("img");
const name = document.querySelector("h2");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");

function displayUI(data){
    image.src = data.avatar_url;
    name.innerText = dataname;
    followers.innerText = `followers: ${data.followers}`;
    following.innerText = `followers: ${data.following}`;
}

function handleChange(event) {
    console.log(event.keyCode);
    if(event.keyCode === 13){
        const xhr = new XMLHttpRequest();
        xhr.open(`GET`, `https://api.github.com/user/{username}`);
        xhr.onload = function (){
            let userData = JSON.parse(xhr.response);
            displayUI(userData);
        }
        xhr.send();
        event.target.value = "";
    }
}


input.addEventListener(`keyUp`, handleChange);