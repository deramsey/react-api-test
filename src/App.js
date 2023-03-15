import './App.css';
import axios from "axios";
import { useState } from 'react';

const p = axios.get("https://www.boredapi.com/api/activity");

function App() {

  const [activity, setActivity] = useState("");
  const [parti, setParti] = useState(1);

  p.then(response => {
    setActivity(response.data.activity);
    setParti(response.data.participants);
  })

  return (
    <div className="App">
      <h1>{ activity }</h1>
      <p>Number of People: {parti}</p>
    </div>
  );
}

export default App;
