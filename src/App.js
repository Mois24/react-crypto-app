import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  const [listOfCryptocurrencies, setListOfCryptocurrencies] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'J7ZpG9OITO1nMg5lbJrKkWRwAazizmhekuL9j37H7ow='
    }
  };
  
  useEffect(() => {
    fetch('https://openapiv1.coinstats.app/coins?limit=60', options)
      .then(response => response.json())
      .then(response => setListOfCryptocurrencies(response.result))
      .catch(err => console.error(err));
  }, [])

  const getValue = (value) => {
    setSearchWord(value);
  }

  const filteredCryptocurrencies = listOfCryptocurrencies.filter((crypto) => {
    return crypto.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
      <Header getValue={getValue} />
      <Main filteredCryptocurrencies={filteredCryptocurrencies}/>
      <Footer />
    </div>
  );
}

export default App;
