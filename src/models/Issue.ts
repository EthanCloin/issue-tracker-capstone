// I would prefer to use the terse syntax 'Issue' most often.
// maybe we change this again to be IssuePrototype (no ID) and Issue (has id)

export default interface Issue {
  description: string;
  status: "open" | "closed" | string; // consider custom typing or something to only allow open or closed
  assignee: string;
}

export interface IssueResponse extends Issue {
  _id: string;
}

export interface IssueMetadata extends IssueResponse {
  _created: string;
  _changed: string;
  _createdby: string; // consider finding the specific datettime format type
  _changedby: string;
  _keywords: string[];
  _version: number;
}
