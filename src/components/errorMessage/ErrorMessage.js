import image from './404.jpg'
const ErrorMessage = () => {
    return (
        <img src={image} style={{display: 'block', width: '400px', objectFit: 'contain', margin:'0 auto'}} alt='EROR404' />
    )
}

export default ErrorMessage;