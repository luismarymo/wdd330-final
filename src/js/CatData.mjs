const baseURL = "https://675947f060576a194d1424e4.mockapi.io/cat330/cats";

function convertToJson(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(`${response.status} - ${response.statusText}`)
}

export default class CatData {
    async getData() {
        try {
            const response = await fetch(baseURL);
            const data = await convertToJson(response);

            return data;
    
        } catch (error) {
            console.error('Unable to fetch data:', error);
            throw error;
        }
    }
}