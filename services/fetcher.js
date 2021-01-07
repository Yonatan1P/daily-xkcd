import axios from 'axios'

export async function fetchAll(web=true) {

    if (web) {
        return webFetchAll();
    } else {
        return mockFetchAll();
    }
}

export async function fetchOne(id, web=true) {

    if (web) {
        return webFetchOne(id);
    } else {
        return mockFetchOne(id);
    }
}

function mockFetchAll() {
    return [
        {id: 1, title: "titles", url: "URLs", date: "date that it was posted", transcript: "words used in the comic"},
        {id: 2, title: "les miserables", url: "another URLs", date: "another date", transcript: "more words"},
        {id = 3, title: "the something something", url: "yet another URLs", date: "and another", transcript: "bigger words"},
    ]
}

function mockFetch(id) {
    const comics = mockFetchAll();

    for(let comic of comics) {
        if (comic.id == id) {
            return comic;
        }
    }
    return null;
}

async function webFetchAll() {
    const base = 'https://snacks-circle-back.herokuapp.com'

    try {
        const tokenResponse = await axios.post(base + '/api/token/', {
            username: "yoni",
            password: "yoni",
        });
        const { refresh, access } = tokenResponse.data;

        const config = {
            headers: { Authorization: `Bearer ${access}` }
        };

        const comicsResponse = await axios.get(base + "/api/v1/comics/", config);

        return comicsResponse.data
    } catch(error) {
        console.error(error);
    }
    return [];
}

async function webFetchOne(id) {
    const base = 'https://snacks-circle-back.herokuapp.com'

    try{
        const tokenResponse = await axios.post(base + '/api/token/', {
            username: "yoni",
            password: "yoni",
        });
        const {refresh, access } = tokenResponse.data;

        const config = {
            headers: {Authorization: `Bearer ${access}` }
        };
        const comicsResponse = await axios.get(`${base}/api/v1/comics/${id}/`, config);

        return comicsResponse.data
    } catch (error) {
        console.error(error);
    }
    return null;
}