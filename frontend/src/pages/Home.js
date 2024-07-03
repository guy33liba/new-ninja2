import React, { useEffect, useState } from "react"
const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("http://localhost:4000/api/workouts")
      const json = await response.json()
      if (response.ok) {
        setWorkouts(json)
      }
      fetchWorkout()
    }
  }, [])
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return  <p key={workouts._id}>{workout.title}</p>
          })}
      </div>
    </div>
  )
}

export default Home
