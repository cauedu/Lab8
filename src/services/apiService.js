import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetch a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow and let caller handle
    }
};

// Fetches details for an individual product by its ID
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Deletes product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow and let caller handle
    }
};

// Adds new product
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
}

// Edits an existing product by ID
export const editProduct = (id, product) => {
    return axios.put(`${BASE_URL}/products/${id}`, JSON.stringify(product));
};