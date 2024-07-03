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
<<<<<<< HEAD
      console.log(`listening on ${PORT}
        mongo db connected`)
=======
      console.log(`mongo connected listening on ${PORT}`)
>>>>>>> 63a3051aabfc5d931307e41c2fe6ff72c370af14
    })
  })
  .catch((err) => console.log(err))
