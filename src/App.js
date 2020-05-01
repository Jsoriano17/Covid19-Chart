import React, { useState, useEffect } from 'react';
import './App.css';
import Example from './Example'

function App() {
  const [covid19Stats, setCovid19Stats] = useState([])
  const [lastChecked, setLastChecked] = useState('')

  useEffect(() => {

    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "bd4571012emsh3ec5b95cb6254e3p183ed6jsnb65a5421d25e"
      }
    })
      .then(response => response.json()) //axios does this for us 
      .then(data => {
        setCovid19Stats(data.data.covid19Stats)
        setLastChecked(data.data.lastChecked)
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  return (
    <div className='App'>
      <p>update at: {lastChecked}</p>
      <p>data point: {covid19Stats.length}</p>
      <Example covid19Stats={covid19Stats} />
    </div>
  );
}

export default App;