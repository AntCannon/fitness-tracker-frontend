import React from 'react'
import { useState } from 'react'

const WorkoutNewForm = () => {
  const [ workout, setWorkout ] = useState({})
  return (
    <div>WorkoutNewForm
      <form>
        <label>
          Type: <input
            id='type'
            type='text'
            value={workout.type}
            required
            />
        </label>
        <br />

        <label>
          Duration: <input
            id='durationInMinutes'
            type='number'
            value={workout.durationInMinutes}
            required
            />
        </label>
        <br />

        <label>
          Calories Burned: <input
            id='caloriesBurned'
            type='number'
            value={workout.caloriesBurned}
            required
            />
        </label>
        <br />

        <label>
          Date: <input
            id='date'
            type='date'
            value={workout.date}
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
