import { Schema, models, model } from "mongoose";

const SkillSchema = new Schema({
  value: {
    type: String,
    required: true,
    trim: true,
  },
});

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "design",
        "social_sciences",
        "sport",
        "language_learning",
        "medicine",
        "data_science",
        "psychology",
      ],
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: ["english", "persian"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    level: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },
    rate: {
      type: Number,
      default: 0,
    },
    student_count: {
      type: Number,
      default: 0,
      min: 0,
    },
    skills: {
      type: [SkillSchema],
      required: true,
      validate: {
        validator: (val: string[]) => val.length > 0,
        message: "At least one skill is required.",
      },
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    review_count: {
      type: Number,
      default: 0,
      min: 0,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
    // curriculum: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "CURRICULUM",
    //   },
    // ],
  },
  { timestamps: true },
);

const Course = models.Course || model("Course", courseSchema);

export default Course;
