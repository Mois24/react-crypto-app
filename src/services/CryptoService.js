import { useHttp } from '../hooks/http.hook';

const useCryptoService = () => {
    const {loading, request, error, clearError} = useHttp();
    
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