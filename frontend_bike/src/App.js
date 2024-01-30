import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';

function App() {
  const rest = useState()
  useEffect(()=>{
    console.log("%%%%%%%%")
    fetch("www.randomstringoftext.aws.com/maindata")
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
        <img src={rest.url}></img>
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
