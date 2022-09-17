const KEY = '05f0a4fb193a3e163e172a013348e621';
const language = 'pt-BR';
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=${language}&region=BR&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=23&with_genres=53&with_watch_monetization_types=flatrate`;
const Filme = document.getElementById('filme');


function gerarNum(a, b) {
    return Math.floor(Math.random() * (b-a + 1)) + a;
}


function roletarTrend(){
    fetch(`
    https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
        ).then(response => {
            return response.json();
        }).then(jsonParsed =>{
                const pages = jsonParsed.total_pages;
                const results = jsonParsed.total_results;
                getMovie(idGenre);
            } )
        while(Filme.firstChild){
            Filme.removeChild(Filme.firstChild);
        }
        
}

function getMovie() {
    const Movie = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=${language}&page=${gerarNum(0, 19)}&region=BR`;
    fetch(Movie
        ).then(response => {
            return response.json();
        }).then(jsonres =>{
            const movieNum = jsonres.results[gerarNum(0, 19)]
            console.log(jsonres);
            const nomeFilme = movieNum.original_title;
            const posterFilme = movieNum.poster_path;
            const overviewFilme = movieNum.overview;
            const dateRelease = movieNum.release_date;
            let data = dateRelease.split('-').reverse().join('/');
            createDivMovie(nomeFilme, Filme, posterFilme, overviewFilme, data);
            /*jsonres.results.forEach(movie =>{
                const nomeFilme = movie.original_title;
                const posterFilme = movie.poster_path;
                const overviewFilme = movie.overview;
                createDivMovie(nomeFilme, Filme, posterFilme, overviewFilme);
                console.log(movie);
            })*/
            console.log(gerarNum(0, 19));
        } )        
        while(Filme.firstChild){
            Filme.removeChild(Filme.firstChild);
        }
}


function createDivMovie(name, div, poster_path, overview, dateRelease) {
    const divPai = document.createElement('div');
    //const divQuaseFilho = document.createElement('div');
    const divFilho = document.createElement('div');
    const divNome = document.createElement('div');
    const divOver = document.createElement('div');
    //const divSelect = document.createElement('select');
    const textName = document.createElement('text');
    const textOverview = document.createElement('text');
    const textDate = document.createElement('text');
    const img = document.createElement('img');
    const br = document.createElement('br');

    divFilho.appendChild(img);
    divFilho.appendChild(divOver);
    divOver.appendChild(textOverview);
    divFilho.appendChild(textDate);
    divFilho.appendChild(br);
    divFilho.appendChild(divNome);
    divNome.appendChild(textName);
    divPai.appendChild(divFilho);
    //divQuaseFilho.appendChild(divFilho);
    div.appendChild(divPai);

    textName.textContent = name;
    textDate.textContent = `Data de lançamento: ${dateRelease}      `;
    textOverview.textContent = overview;
    img.src= `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;
    divPai.classList.add('Movie');
    divFilho.classList.add('filho');
    divNome.classList.add('nome');
    divOver.classList.add('overview');
    //divQuaseFilho.classList.add('QuaseFilho');
}

fetch(URL
).then(response => {
    return response.json();
}).then(jsonparsed =>{
    console.log(jsonparsed);
} )