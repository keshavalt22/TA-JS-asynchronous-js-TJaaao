let input = document.querySelector("input");
let Info = document.querySelector(".info");
let userImage = document.querySelector(".info img");
let userName = document.querySelector(".info h3");
let userLogin = document.querySelector(".info p");
let followers = document.querySelector('.followers');
let following = document.querySelector('.Following');


function fetch (url, successHandler) {
    let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => successHandler(JSON.parse(xhr.response));
        
        xhr.onerror = () => console.error(`Something went wrong!`);
        xhr.send();
}

function displayExtraInfo(url, rootElm){
    following.innerHTML = "";
    fetch(url,function(followersList){
        let topFive = followersList.slice(0, 5);

        topFive.forEach((info) => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = info.avatar_url;
            img.alt = info.name;
            li.append(img);
            rootElm.append(li);
        });      
    }
    );
}
function createUI(userInfo){
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;
    userName.innerText = userInfo.name;
    userLogin.innerText = `@` + userInfo.login;
    displayExtraInfo(`https://api.github.com/users/${userInfo.login}/followers`, followers);
    displayExtraInfo(`https://api.github.com/users/${userInfo.login}/following`, following);
}
function handleInput(event){
    if(event.keyCode === 13 && input.value){
        let url = `https://api.github.com/users/`;
        let username = input.value;
        fetch(url + username, createUI);
        input.value = "";
    }
}

input.addEventListener("keyup", handleInput);


let catsImg = document.querySelector(".cats img");
let catsBtn = document.querySelector(".cats button");

function handleClick(){
    fetch(`https://api.thecatapi.com/v1/images/search?limit=1&size=full`, 
    function(cats) {
        catsImg.src = cats[0].url;
    })
}

catsBtn.addEventListener('click', handleClick);