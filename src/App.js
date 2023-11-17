import { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  const [listOfCryptocurrencies, setListOfCryptocurrencies] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'J7ZpG9OITO1nMg5lbJrKkWRwAazizmhekuL9j37H7ow='
    }
  }
  useEffect(() => {
    fetch('https://openapiv1.coinstats.app/coins?limit=12&currency=USD', options)
      .then(response => response.json())
      .then(response => setListOfCryptocurrencies(response.result))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main listOfCryptocurrencies={listOfCryptocurrencies}/>
      <Footer />
    </div>
  );
}

export default App;
