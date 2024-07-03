import express from "express"
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workoutControllers"
const router = express.Router()

router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", createWorkout)
router.delete("/:id", deleteWorkout)
router.patch("/:id", (req, res) => {
  req.send({ mssg: " a patch workout" })
})
export default router
