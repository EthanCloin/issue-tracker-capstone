import { createContext } from "react";
import { Issue, IssueStatus, IssuePrototype } from "../models/Issue";

interface IssueContextModel {
  issues: Issue[];
  addIssue: (newIssue: IssuePrototype) => void;
  deleteIssue: (issueId: number) => void;
  hasAssignee: (id: number, assignee: string) => boolean;
  isOpen: (id: number) => boolean;
  setStatus: (id: number, status: IssueStatus) => void;
  setAssignee: (id: number, assignee: string) => void;
}

const defaults: IssueContextModel = {
  issues: [],
  addIssue: () => {},
  setStatus: () => {},
  setAssignee: () => {},
  deleteIssue: () => {},
  hasAssignee: () => false,
  isOpen: () => false,
};

const IssuesContext = createContext(defaults);
export default IssuesContext;
