<<<<<<< HEAD
import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema
const workoutSchema = new Schema(
=======
import mongoose from "mongoose"

const workoutSchema = mongoose.Schema(
>>>>>>> 63a3051aabfc5d931307e41c2fe6ff72c370af14
  {
    title: { type: String, required: true },
    reps: { type: String, required: true },
    load: { type: String, required: true },
  },
<<<<<<< HEAD
  { timestamps: true },
)
=======
  { timestamps: true }
)

>>>>>>> 63a3051aabfc5d931307e41c2fe6ff72c370af14
const Workout = mongoose.model("Workout", workoutSchema)
export default Workout
