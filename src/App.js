import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  
  // useEffect(() => {
  //   tg.Ready();
  // }, [])

  const OnClose = () => {
    tg.close();
  }


  return (
    <div className="App">
        test

        <button onClick={OnClose}>Закрыть</button>
    </div>
  );
}

export default App;
