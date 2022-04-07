(function main(){
    let url = `https://www.anapioficeandfire.com/api/books`;
let rootElm = document.querySelector('.book_list');
let newWindow = document.querySelector('.new_window');
let charctersUL = document.querySelector('.characters');
let closeBtn = document.querySelector('.close_window');

`<div class="spinner"><div class="donut"></div></div>`

function handleSpinner(root, status = false){
    if(status) {
        root.innerHTML =`<div class="spinner"><div class="donut"></div></div>`;
    }
}

function newWindowUl(characters){
    handleSpinner(charctersUL, true);
    Promise.all(
        characters.map((character) => fetch(character).then(res => res.json()))
        ).then(charactersData => {
            charctersUL.innerHTML = '';
           charactersData.forEach(ch => {
            let li = document.createElement('li');
            li.innerText = `${ch.name} : ${ch.aliases.join(' ')}`
            charctersUL.append(li);
           })
        });
}

function createBookUI(data){
    rootElm.innerHTML = '';
    data.forEach((book) => {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.innerText = book.name;
        let p = document.createElement('p');
        p.innerText = book.authors.join(' ');
        let button = document.createElement('button');
        button.innerText = `Show Characters (${book.characters.length})`;

        button.addEventListener('click', () =>{
            newWindow.style.display = "block";
            newWindowUl(book.characters);
            closeBtn.addEventListener('click', () => {
                newWindow.style.display = "none";
            })
        })

        li.append(h3 , p, button);
        rootElm.append(li);
    });
}

function fetchData(){
    handleSpinner(createBookUI, true);
    fetch(url)
        .then(res => res.json())
        .then((userData) => {
        createBookUI(userData);
        })
}

fetchData();
})()


