import { createContext } from "react";
import Issue, { IssueResponse } from "../models/Issue";

interface IssueContextModel {
  issues: IssueResponse[];
  addIssue: (newIssue: Issue) => void;
  deleteIssue: (issueId: string) => void;
  hasAssignee: (id: string, assignee: string) => boolean;
  isOpen: (id: string) => boolean;
  // consider adding editIssue
  // really consider adding the below:
  /*
  setAssignee: (id: string, assignee: string) => void;
  setStatus: (status: ("open" | "closed")) => void;
  */
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
