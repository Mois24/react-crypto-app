import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {

  const [listOfCryptocurrencies, setListOfCryptocurrencies] = useState([]);
  const [searchWord, setSearchWord] = useState('');

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
