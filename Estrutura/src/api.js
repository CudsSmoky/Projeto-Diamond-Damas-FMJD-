// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seu-backend-url.repl.co/api'  // URL do backend
});

export default api;
