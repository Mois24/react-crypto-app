import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useCryptoService from '../../services/CryptoService';

import './Main.scss';

const Main = (props) => {
    const [cryptoList, setCryptoList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [cryptoEnded, setCryptoEnded] = useState(false);
    const [page, setPage] = useState(1);

    const {loading, error, getCrypto} = useCryptoService();

    useEffect(() => {
        onRequest(page, true);
    }, []);


    const onRequest = (page, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getCrypto(page)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCryptoList) => {
        let ended = false;
        if (newCryptoList.length < 8) {
            ended = true;
        }

        setCryptoList(cryptoList => [...cryptoList, ...newCryptoList]);
        setNewItemLoading(false);
        setPage(page + 1);
        setCryptoEnded(ended);
    }

    function renderItems(arr) {

        const filteredCryptocurrencies = arr.filter((crypto) => {
            return crypto.name.toLowerCase().includes(props.searchWord.toLowerCase());
        })
    
        const items =  filteredCryptocurrencies.map((item) => {
            const shortPrice = () => {
                let result = String(item.price).split('');
                for (let i = 0; i < result.length; i++) {
                    if (result[i] === '.' && result[i + 1] === '0' && result[i + 2] === '0' && result[i + 3] === '0' && result[i + 4] === '0') {
                        return result.join('');
                    } if (result[i] === '.') {
                        return result.slice(0, i + 5).join('');
                    }
                }
                return result.join('');
            }
            return (
                <div 
                    className='coin'
                    key={item.rank}>
                    <h1><a href={item.websiteUrl}>{item.name}</a></h1>
                    <img className='images' src={item.icon}/>
                    <h3>{shortPrice()}$</h3>
                    <h3>{item.symbol}</h3>
                </div>
            )
        });

        return (
            <div className='wrapper'>
                { items }
            </div>
        )
    }

    const items = renderItems(cryptoList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    return (
        <main className='main'>
            <div>
                {spinner}
                {items}
                {errorMessage}
                <button
                    disabled={newItemLoading}
                    style={{'display': cryptoEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(page)}>
                    Load More Cryptocurrencies
                </button>
            </div>
        </main>
        )
    }
export default Main;