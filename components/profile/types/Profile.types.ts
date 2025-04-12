export interface ProfileType {
  fullname: string;
  email: string;
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN";
  phone: null | string;
  gender: "MALE" | "FEMALE" | "OTHER" | "" | null;
  bio: null | string;
  headline: null | string;
  createdAt: string;
}
