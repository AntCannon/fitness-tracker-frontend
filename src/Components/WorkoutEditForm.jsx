import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const UpdateWorkout = () => {
  const [ workout, setWorkoutDetails ] = useState({
    type: "",
    durationInMinutes: 0,
    caloriesBurned: 0,
    date: ""
  })

  const { id } = useParams() 
  const navigate = useNavigate()

  const handleTextChange = (e) =>  {
    setWorkoutDetails({...workout, [e.target.id]: e.target.value})
  }

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then(res => res.json())
      .then(resJSON => setWorkoutDetails(resJSON))
    }, [id])

  const updateWorkout = () => {
    fetch(`${API}/workouts/${id}`, {
      method: "PUT",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => navigate(`/workouts/${id}`))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateWorkout()
    setWorkoutDetails({
      type: "",
      durationInMinutes: 0,
      caloriesBurned: 0,
      date: ""
    })
  }

  return (
    <div>Edit Workout
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

        <button type='submit'>Update Workout</button>
      </form>
    </div>
  )
}

export default UpdateWorkout
