import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((error)=>{
      console.log("Error fetching jokes:", error);
    })
  })

  return (
    <>
      <h1>FRONTEND RUNNING</h1>
      <p>
        JOKES : {jokes.length}
      </p>
      {
        jokes.map((joke, index)=>(
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


//here we are fetching jokes from the backend server using axios and displaying them in the frontend React application. The backend server has an endpoint /api/jokes that returns a list of jokes, and the frontend uses a proxy configuration in vite.config.js to route requests to this endpoint correctly.