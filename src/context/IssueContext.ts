import { createContext } from "react";
import Issue, { IssueResponse } from "../models/Issue";

interface IssueContextModel {
  issues: IssueResponse[];
  addIssue: (newIssue: Issue) => void;
  deleteIssue: (issueId: string) => void;
  hasAssignee: (id: string, assignee: string) => boolean;
  isOpen: (id: string) => boolean;
  setStatus: (id: string, status: "open" | "closed") => void;
  setAssignee: (id: string, assignee: string) => void;
}

const defaults: IssueContextModel = {
  issues: [],
  addIssue: () => {},
  setStatus: () => {},
  setAssignee: () => {},
  deleteIssue: () => {},
  hasAssignee: () => false,
  isOpen: () => false,
  updateIssue: () => {},
};

const IssuesContext = createContext(defaults);
export default IssuesContext;
