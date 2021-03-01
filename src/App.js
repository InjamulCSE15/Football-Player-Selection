import logo from './logo.svg';
import './App.css';
import squadData from './fakeData/data.json';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(squadData);
    console.log(squadData);
  }, [])
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
