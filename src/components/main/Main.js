import Cryptocurrency from '../cryptocurrency/Cryptocurrency';

import './Main.scss';

const Main = (props) => {
    return (
        <main className='main'>{props.listOfCryptocurrencies.map((crypto, index) => {
            return ( 
                <Cryptocurrency 
                    key={index}
                    name={crypto.name} 
                    websiteUrl={crypto.websiteUrl}
                    icon={crypto.icon} 
                    price={crypto.price} 
                    symbol={crypto.symbol}
                />
            );
        })}</main>
    )
}
export default Main;