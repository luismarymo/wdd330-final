const key = process.env.API_KEY;

function convertToJson(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(`${response.status} - ${response.statusText}`)
}

export default class CatData {
    constructor(number){
        this.number = number;
    }

    async getData() {
        const baseURL = `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${this.number}`;
        
        try {
            const response = await fetch(baseURL, {headers: {
                "x-api-key": key
            }});

            const data = await convertToJson(response);
            
            return data;
    
        } catch (error) {
            console.error("Unable to fetch data:", error);
            throw error;
        }
    }
}