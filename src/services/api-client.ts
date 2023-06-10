import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e511524990bf48238cfa2cb20ddbf972'
    }
})