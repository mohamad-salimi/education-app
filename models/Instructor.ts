import { Schema, models, model } from "mongoose";

const instructorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  field_of_teaching: {
    type: String,
    required: true,
  },
  courses_count: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  student_count: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const Instructor = models.Instructor || model("Instructor", instructorSchema);

export default Instructor;
