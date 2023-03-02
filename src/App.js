import logo from './logo.svg';
import './App.css';
import MainBody from './component/MainBody/MainBody';
import Footer from './component/Footer/Footer';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  const handleClick = (isUp) => {
    isUp ? setValue(value + 1) : setValue(value - 1)
  }

  return (
    <div className="App">
      <MainBody value={value} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
