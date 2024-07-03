import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema
const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    reps: { type: String, required: true },
    load: { type: String, required: true },
  },
  { timestamps: true },
)
const Workout = mongoose.model("Workout", workoutSchema)
export default Workout
