const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema defines structure of a document inside db
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    // associating every workout document with a particular user
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
