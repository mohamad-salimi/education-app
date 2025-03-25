import { Schema, models, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
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
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    instructors: [
      {
        type: Schema.Types.ObjectId,
        ref: "USER",
      },
    ],
  },
  { timestamps: true },
);

const Course = models.Course || model("Course", courseSchema);

export default Course;
