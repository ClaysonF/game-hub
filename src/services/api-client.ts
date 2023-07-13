import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e511524990bf48238cfa2cb20ddbf972'
    }
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
