const fetch = require('node-fetch');
const fs = require('fs');

const API_URL = 'https://rickandmortyapi.com/api/character';

const getDataApi = async(API_URL) => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const results = await JSON.stringify(data);
        fs.writeFile('files/apiRick-Morty.json', results, (err) => {
            if (err) {      throw err; }
        }); 

    }catch (err) {   
        console.error(`Ha habido un error de consulta a ${url}, ${error}`)
    }
}

getDataApi(API_URL)