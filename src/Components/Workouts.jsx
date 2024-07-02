import React from 'react'
import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL

const Workouts = () => {
  const [ workouts, setWorkouts ] = useState([])

  useEffect(() => {
    fetch(`${API}/workouts`)
      .then((res) => res.json())
      .then((JSONres) => setWorkouts(JSONres))
  })

  return (
    <div>
      <h1>Workouts</h1>
      {workouts.map(workout => (
        <p key={workout.id}>{workout.type}</p>
      ))}
    </div>
  )
}

export default Workouts