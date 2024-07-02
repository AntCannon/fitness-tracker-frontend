import React from 'react'
import { useState } from 'react'

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

  return (
    <div>WorkoutNewForm
      <form>
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
