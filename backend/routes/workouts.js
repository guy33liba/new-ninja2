import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" })
})
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single workouts" })
})
router.post("/", (req, res) => {
  const { title, load, reps } = req.body
})
router.delete("/", (req, res) => {
  req.send({ mssg: " a delete workout" })
})
router.patch("/", (req, res) => {
  req.send({ mssg: " a patch workout" })
})
export default router
