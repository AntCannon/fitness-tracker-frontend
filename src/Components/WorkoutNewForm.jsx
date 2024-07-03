import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const WorkoutNewForm = () => {
  const [ workout, setWorkoutDetails ] = useState({
    type: "",
    durationInMinutes: 0,
    caloriesBurned: 0,
    date: ""
  })

  const handleTextChange = (e) =>  {
    setWorkoutDetails({...workout, [e.target.id]: e.target.value})
  }
  
  console.log(workout)

  const navigate = useNavigate()

  const addWorkout = () => {
    fetch(`${API}/workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => navigate('/workouts'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorkout()
    setWorkoutDetails({
      type: "",
      durationInMinutes: 0,
      caloriesBurned: 0,
      date: ""
    })
  }

  return (
    <div>WorkoutNewForm
      <form onSubmit={handleSubmit}>
        <label>
          Type: <input
            id='type'
            type='text'
            value={workout.type}
            onChange={handleTextChange}
            required
            />
        </label>
        <br />

        <label>
          Duration: <input
            id='durationInMinutes'
            type='number'
            value={workout.durationInMinutes}
            onChange={handleTextChange}
            required
            />
        </label>
        <br />

        <label>
          Calories Burned: <input
            id='caloriesBurned'
            type='number'
            value={workout.caloriesBurned}
            onChange={handleTextChange}
            required
            />
        </label>
        <br />

        <label>
          Date: <input
            id='date'
            type='date'
            value={workout.date}
            onChange={handleTextChange}
            required
            />
        </label>
        <br />

        <button type='submit'>Create New Workout</button>
      </form>
    </div>
  )
}

export default WorkoutNewForm
