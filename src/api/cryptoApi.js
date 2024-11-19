import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptos = (page, query) =>
    axios.get(`${API_URL}/coins/markets`, {
        params: {
            vs_currency: 'usd',
            per_page: 20,
            page,
            ids: query || undefined,
        },
    });

export const fetchCoinDetails = (id) =>
    axios.get(`${API_URL}/coins/${id}`);

export const fetchPriceHistory = (id, days) =>
    axios.get(`${API_URL}/coins/${id}/market_chart`, {
        params: { vs_currency: 'usd', days },
    });
