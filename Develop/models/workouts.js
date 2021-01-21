const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: {
    name: {
      type: String,
      trim: true,
      required: "Enter exercise name"
    },
    type: {
      type: String,
      trim: true,
      required: "Enter type of exercise"
    },
    duration: {
      type: Number,
      required: "Enter duration of exercise"
    },
    weight: {
      type: Number,
      required: "Enter weight used"
    },
    reps: {
      type: Number,
      required: "Enter number of reps completed"
    },
    sets: {
      type: Number,
      required: "Enter number of sets completed"
    },
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
