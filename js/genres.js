const KEYAPI = '05f0a4fb193a3e163e172a013348e621';
const lang = 'pt-BR';
const selectGenero = document.getElementById('genero');


const URLGENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEYAPI}&language=${lang}`;

fetch (URLGENRE
).then(response => {
    return response.json();
}).then(jsonGenres=>{
    const divgenres = document.querySelector('#genres');

    jsonGenres.genres.forEach(element => {
        const nameGenero = element.name;
        const idGenero = element.id;

        var optionName = document.createElement('option');
        optionName.textContent = nameGenero;
        optionName.value = idGenero;
        selectGenero.appendChild(optionName);


        //createDivGenres(idGenero, nameGenero, divgenres);
    });
    console.log(jsonGenres);
} )

/*function createDivGenres(id, name, div) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const divSelect = document.createElement('select');
    const textName = document.createElement('text');

    divFilho.appendChild(divSelect);
    divPai.appendChild(divFilho);
    div.appendChild(divPai);

    textName.textContent = name;
    divPai.classList.add('nome');
}*/