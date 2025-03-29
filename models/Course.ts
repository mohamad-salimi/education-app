import { Schema, models, model } from "mongoose";

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    student_count: {
      type: Number,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "REVIEW",
      },
    ],
    review_count: {
      type: Number,
      required: true,
    },
    instructors: [
      {
        type: Schema.Types.ObjectId,
        ref: "USER",
      },
    ],
    curriculum: [
      {
        type: Schema.Types.ObjectId,
        ref: "CURRICULUM",
      },
    ],
  },
  { timestamps: true },
);

const Course = models.Course || model("Course", courseSchema);

export default Course;
