import express from "express"
import { createWorkout, getWorkout, getWorkouts } from "../controllers/workoutControllers"
const router = express.Router()

router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", createWorkout)
router.delete("/", (req, res) => {
  req.send({ mssg: " a delete workout" })
})
router.patch("/", (req, res) => {
  req.send({ mssg: " a patch workout" })
})
export default router
