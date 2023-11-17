import './Header.scss';

const Header = (props) => {
    return (
        <header className='header'>
            <input 
                type='text' 
                placeholder='Cryptocurrency...'
                onChange={(e) => props.getValue(e.target.value)}
            />
        </header>
    )
}
export default Header;