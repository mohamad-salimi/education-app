export interface CourseType {
  _id: string;
  name: string;
  category: string;
  description: string;
  language: "persian" | "english";
  price: number;
  level: "beginner" | "intermediate" | "advanced";
  rate: number;
  student_count: number;
  skills: Skill[];
  reviews: Review[];
  review_count: number;
  instructor: Instructor;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Skill {
  _id: string;
  value: string;
}

interface Instructor {
  _id: string;
  fullname: string;
}

interface Review {
  _id: string;
  fullname: string;
}
