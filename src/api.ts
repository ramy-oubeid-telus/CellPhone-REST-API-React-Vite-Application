import axios from 'axios';

const apiUrl = 'https://api.restful-api.dev/objects';

export async function fetchCellphones() {
    const response = await axios.get(apiUrl);
    return response.data;
}

