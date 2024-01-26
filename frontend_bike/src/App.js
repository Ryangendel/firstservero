import logo from './logo.svg';
import {useEffect} from "react"
import './App.css';

function App() {
  useEffect(()=>{
    console.log("%%%%%%%%")
    fetch("/getallbikes")
    .then(data=>data.json())
    .then(cleanedData=>{
      console.log("------------")
      console.log(cleanedData)
      console.log("------------")
      document.getElementById("bikedata").innerHTML= cleanedData[0].bike_brand
    })
  })

  function handleClick(e){
console.log("insdie button")
  }
  return (
    <div className="App">
      <div id="bikedata"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
