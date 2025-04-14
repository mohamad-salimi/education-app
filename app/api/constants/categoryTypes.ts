export type CategoryType = "primary" | "info" | "warning" | "error" | "success";

export const categoryTypeMap: { keyword: string; type: CategoryType }[] = [
  { keyword: "science", type: "info" },
  { keyword: "design", type: "info" },
  { keyword: "medicine", type: "success" },
  { keyword: "health", type: "success" },
  { keyword: "language", type: "error" },
  { keyword: "sport", type: "warning" },
  { keyword: "psychology", type: "success" },
];
