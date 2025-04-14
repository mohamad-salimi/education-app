export interface InstructorType {
  _id: string;
  fullname: string;
  bio: string;
  headline: string;
  courses: Course[];
  course_count?: number;
  rate?: number;
  student_count?: number;
}

export interface Course {
  _id: string;
  name: string;
  category: string;
  price: number;
  rate: number;
  review_count: number;
}
