export type IssueStatus = "open" | "closed";

export interface IssuePrototype {
  title?: string;
  description: string;
  status: IssueStatus;
  assignee: string;
}

export interface Issue extends IssuePrototype {
  id: number;
}

/**
 * represents the keys which can be used to filter the issues presented on the home page
 */
export interface IssueFilter {
  description?: string;
  status?: IssueStatus;
  assignee?: string;
}
