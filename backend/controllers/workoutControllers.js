import mongoose, { mongo } from "mongoose"
import Workout from "../models/Workout.js"

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).res.json({ error: error.message })
  }
}

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}
const getWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" })
  }
  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: "No Such Wrokout" })
  }
  res.status(200).json(workout)
}
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" })
  }
  const workout = await Workout.findOneAndDelete({ _id: id })
  if (!workout) {
    res.status(404).json({ error: "No Such Workout" })
  }
  res.status(200).json(workout)
}
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" })
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
  res, status(200).json(workout)
}
export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout }
