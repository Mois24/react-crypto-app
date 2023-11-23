import { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

import './App.scss';

function App() {

  const [searchWord, setSearchWord] = useState('');

  const getValue = (value) => {
    setSearchWord(value);
  }

  return (
    <div className="App">
      <Header getValue={getValue} />
      <Main searchWord={searchWord}/>
      <Footer />
    </div>
  );
}

export default App;
