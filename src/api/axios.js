import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products?limit=9'

export const getProducts = async() => {
    const products = await axios.get(`${BASE_URL}`).catch((e) => {
        console.error(e);
    })

    return products.data.products
}

