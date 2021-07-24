import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Home from './components/Home'
import Routes from './Routes';

function App() {
  // const [locationData, setLocationData] = useState({
  //    "USA":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  //     "Florida","Georgia","Hawaii","Idaho","IllinoisIndiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  //     "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana",
  //     ]
  // })
  // const [locationBoard,setLocationBoard] = useState([
  //   {"id":0,"country":"USA", "state":"California"},
  //   {"id":1,"country":"USA", "state":"Florida"}]
  //   )
  

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
