import {useState,useEffect,useRef} from 'react';
import './App.css';

function App() {
  const [button,setButton] = useState(false);
  const [timer,setTimer] = useState(0);
  const timerId = useRef(null);

  const handleClick = () => {
    setButton(!button);
  }

  const handleReset = () => {
    setButton(false);
    setTimer(0);
  }

  const format = (timer)=>{
    const mins = Math.floor(timer/60);
    timer = timer%60;
    return `${mins}:${timer<10?"0":''}${timer}`
  }

  useEffect(()=>{
    timerId.current = setInterval(()=>{
      if(button){
        setTimer((prevValue)=>prevValue+1)
      }  
    },1000);
    return () => clearInterval(timerId.current);
  },[button,timer]);


  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h3>Time: {format(timer)}</h3>
      <button onClick={handleClick}>{button?'Stop':'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
