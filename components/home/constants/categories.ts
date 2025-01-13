type Categories = {
  title: string;
  type: "primary" | "info" | "warning" | "error" | "success";
  query: string;
};

export const categories: Categories[] = [
  {
    title: "Design",
    type: "primary",
    query: "design",
  },
  {
    title: "Social Sciences",
    type: "info",
    query: "social_sciences",
  },
  {
    title: "Sport",
    type: "warning",
    query: "sport",
  },
  {
    title: "Language Learning",
    type: "error",
    query: "language_learning",
  },
  {
    title: "Medicine",
    type: "success",
    query: "medicine",
  },
  {
    title: "Data Science",
    type: "info",
    query: "data_science",
  },
  {
    title: "Psychology",
    type: "success",
    query: "psychology",
  },
];
