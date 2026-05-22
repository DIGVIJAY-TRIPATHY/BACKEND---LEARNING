import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.error('Error fetching jokes:', error);
    })
  })

  return (
    <>
      <h1>My Joke App</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke) =>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
