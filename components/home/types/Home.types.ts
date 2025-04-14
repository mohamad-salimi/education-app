export interface CourseType {
  _id: string;
  category: string;
  name: string;
  price: number;
  rate: number;
  review_count: number;
}

export interface CategoriesType {
  title: string;
  type: "primary" | "info" | "warning" | "error" | "success";
  query: string;
}

export interface InstructorType {
  _id: string;
  fullname: string;
  headline: string;
  course_count: number;
  rate?: number;
  student_count?: number;
}
