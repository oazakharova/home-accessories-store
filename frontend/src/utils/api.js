import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // URL бэкенда

// Получение списка товаров
export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Получение информации о конкретном товаре
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Отправка данных подписки
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
