import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

const WorkoutDetails = () => {
  const [ workout, setWorkout ] = useState({
    "id": 3,
    "type": "",
    "durationInMinutes": 0,
    "caloriesBurned": 0,
    "date": ""
  })
  const [ error, setError ] = useState("")

  let { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then(res => res.json())
      .then(JSONres => {
        console.log(JSONres)
        setWorkout(JSONres)
      })
      .catch((JSONres) => {
        navigate('not-found')
      })
  }, [id])
  
  return (
    <div>WorkoutDetails
      <p>{workout.type}</p>
      <p>{workout.durationInMinutes}</p>
    </div>
  )
}

export default WorkoutDetails