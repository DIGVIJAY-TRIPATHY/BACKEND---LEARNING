import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div>
      <h1>DIGVIJAY</h1>
      <h3>{jokes.length} jokes available</h3>
      {
        jokes.map((joke, index) => {
          return(
            <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default App
