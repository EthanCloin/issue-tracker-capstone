export default interface Issue {
  id: string;
  description: string;
  status: "open" | "closed";
  assignee: string;
}
