import { useHttp } from '../hooks/http.hook';

const useCryptoService = () => {
    const {loading, request, error, clearError} = useHttp();
    /* options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'J7ZpG9OITO1nMg5lbJrKkWRwAazizmhekuL9j37H7ow='
        }
    }; 
        fetch('https://openapiv1.coinstats.app/coins?limit=8', options)
        .then(response => response.json())
        .then(response => setListOfCryptocurrencies(response.result))
        .catch(err => console.error(err));
    
    */

    const _apiBase = 'https://openapiv1.coinstats.app/coins';
    const _basePage = 1;

    const getCrypto = async (page = _basePage) => {
        const data = await request(`${_apiBase}?page=${page}&limit=8`);
        return data.result.map(_transformCrypto);
    }

    const _transformCrypto = (crypto) => {
        return {
            id: crypto.id,
            rank: crypto.rank,
            name: crypto.name,
            websiteUrl: crypto.websiteUrl,
            icon: crypto.icon, 
            price: crypto.price,
            symbol: crypto.symbol
        }
    }
    return {loading, error, clearError, getCrypto};
}

export default useCryptoService;