import logo from './logo.svg';
import './index.css';
import {useState} from "react";

const App = () => {
  const [diceNumber,setDiceNumber] = useState(1);
  const [diceNumber2,setDiceNumber2] = useState(5);

  const refreshDice = () => {
    const ranNum = Math.floor(Math.random()*6) + 1;
    setDiceNumber(ranNum);
    const ranNum2 = Math.floor(Math.random()*6) + 1;
    setDiceNumber2(ranNum2);
  }

  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
      <img width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
      <br />
      <button onClick={()=> refreshDice()} className = "button">Roll</button>
      </center>
    </div>
  );
}

export default App;
