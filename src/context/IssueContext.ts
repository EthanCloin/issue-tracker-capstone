import { createContext } from "react";
import Issue, { IssueResponse } from "../models/Issue";

interface IssueContextModel {
  issues: IssueResponse[];
  addIssue: (newIssue: Issue) => void;
  deleteIssue: (issueId: string) => void;
  hasAssignee: (id: string, assignee: string) => boolean;
  isOpen: (id: string) => boolean;
  // consider adding editIssue
}

const defaults: IssueContextModel = {
  issues: [],
  addIssue: () => {},
  deleteIssue: () => {},
  hasAssignee: () => false,
  isOpen: () => false,
};

const IssuesContext = createContext(defaults);
export default IssuesContext;
