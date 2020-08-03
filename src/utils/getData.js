const API = 'https://rickandmortyapi.com/api/character/'
const API2 = 'https://storage.scrapinghub.com/jobq/466199/list'
const KEY = '?apikey=0ce8426c37874847853c2ea0ae4e269f&format=json'
const API3 = 'https://storage.scrapinghub.com/items/466199/1/'

const getData = async (id) => {
    const apiURL = id ? `${API3+id}/` : API2;

    try {
        const response = await fetch(apiURL + KEY);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log('FETCH ERROR', error);
    }
}

export default getData;