import logo from './logo.svg';
import './App.css';
import squadData from './fakeData/data.json';
import { useEffect, useState } from 'react';
function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(squadData);
    console.log(squadData);
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
