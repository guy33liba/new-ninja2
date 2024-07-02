import express from "express"
import Workout from "../models/Workout.js"
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
    if (!title || !load || !reps) {
      return res.status(400).json({ error: "Please provide all fields" })
    }
    const workout = await Workout.create(title, load, reps)
  } catch (error) {}
})
router.delete("/", (req, res) => {
  req.send({ mssg: " a delete workout" })
})
router.patch("/", (req, res) => {
  req.send({ mssg: " a patch workout" })
})
export default router
