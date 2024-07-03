import express from "express"
import Workout from "../models/Workout"
const router = express.Router()

router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" })
})
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single workouts" })
})
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).res.json({ error: error.message })
  }
})
router.delete("/", (req, res) => {
  req.send({ mssg: " a delete workout" })
})
router.patch("/", (req, res) => {
  req.send({ mssg: " a patch workout" })
})
export default router
