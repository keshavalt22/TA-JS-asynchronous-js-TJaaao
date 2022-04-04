function main(){
    let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
    let newsElm = document.querySelector('.news');
    let select = document.querySelector('select');
    let allNews = [];
    let main = document.querySelector('.main');
    let errorElm = document.querySelector('.error-message');

    function handleErrorMessage( message = 'Something went wrong'){
        main.style.display = 'none';
        errorElm.innerText = message;
    }

    function handleSpinner(status = false){
        if(status) {
            newsElm.innerHTML = `<div class="donut"></div>`;
        }
    }

    function renderNews(news){
        newsElm.innerHTML = '';
        news.forEach(newsItem => {
            let li = document.createElement('li');
            li.classList.add('flex');
            let img = document.createElement('img');
            img.src = newsItem.imageUrl;
            img.alt = newsItem.title;
            let div = document.createElement('div');
            let span = document.createElement('span');
            span.innerText = newsItem.newsSite;
            let h3 = document.createElement('h3');
            h3.innerText = newsItem.title;
            let a = document.createElement('a');
            a.href = newsItem.url;
            let button = document.createElement('button');
            button.innerText = 'Read More';
            a.append(button);
            div.append(span, h3, a);
            li.append(img, div);
            newsElm.append(li);
        });
    } 

    function displayOptions(sources) {
        sources.forEach(source => {
            let option = document.createElement('option')
            option.innerText = source;
            option.value = source;
            select.append(option)
        })
    }



    function init(){
        handleSpinner(true);
        fetch(url)
        .then(res =>  {
            if(!res.ok) {
                throw new Error(`Error happened: ${res.status}`)
            }else{
                return res.json()
            }
        })
        .then((news) => {
            handleSpinner();
            allNews = news;
            renderNews(news);
            let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
            displayOptions(allSources);
        })
        .catch((error) => {
            handleErrorMessage(error);
        })
    }

    select.addEventListener('change', (event) => {
        let source = event.target.value;

        if(source) {
            var filterNews = allNews.filter(news => news.newsSite === source)
        }else {
            filterNews = allNews;
        }
        renderNews(filterNews);
        });

    if(navigator.onLine){
        init();
    }else{
        handleErrorMessage('Check your internet connection');
    }

}


main();