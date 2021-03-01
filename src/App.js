
import './App.css';
import squadData from './fakeData/data.json';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';


function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(squadData);
    console.log(squadData);
  }, [])
  return (
    <div>
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
