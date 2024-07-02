import express from "express"
import dotenv from "dotenv"
import router from "./routes/workouts"
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get("/", (req, res) => {
  res.send("welcome")
})
app.use("/api/workouts", router)
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
