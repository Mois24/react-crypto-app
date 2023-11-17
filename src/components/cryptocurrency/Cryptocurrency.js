import './Cryptocurrency.scss';

const Cryptocurrency = ({name, websiteUrl, icon, price, symbol}) => {
    const shortPrice = () => {
        let result = String(price).split('');
        for (let i = 0; i < result.length; i++) {
            if (result[i] === '.') {
                return result.slice(0, i + 5).join('');
            }
        }
    }
    return (
        <div className='coin'>
            <h1><a href={websiteUrl}>{name}</a></h1>
            <img src={icon}/>
            <h3>{shortPrice()}$</h3>
            <h3>{symbol}</h3>
        </div>
    )
}
export default Cryptocurrency;