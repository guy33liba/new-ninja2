import express from "express"
import dotenv from "dotenv"
import router from "./routes/workouts.js"
import mongoose from "mongoose"

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
mongoose
  .connect(process.env.mongoUri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`)
    })
  })
  .catch((err) => console.log(err))
