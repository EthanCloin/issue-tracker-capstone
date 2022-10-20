import { ReactNode, useState } from "react";
import Issue, { IssueResponse } from "../models/Issue";
import { addIssueToDb, deleteIssueFromDb } from "../services/IssueService";
import IssuesContext from "./IssueContext";

interface Props {
  children: ReactNode;
}

const IssuesContextProvider = ({ children }: Props) => {
  const [issues, setIssues] = useState<IssueResponse[]>([]);

  const addIssue = (newIssue: Issue) => {
    addIssueToDb(newIssue).then(
      (res) => {
        console.info("ADDED TO DB", res._id);
        setIssues([...issues, res]);
      },
      (err) => {
        console.error("UNABLE TO ADD TO DB", err);
      }
    );
  };

  const deleteIssue = (issueId: string) => {
    deleteIssueFromDb(issueId).then(
      (res) => {
        console.info("DELETED FROM DB", res);
        setIssues((prev) => prev.filter((issue) => issue._id != issueId));
      },
      (err) => {
        console.error("UNABLE TO DELETE FROM DB", err);
      }
    );
  };

  const hasAssignee = (id: string, assignee: string): boolean => {
    const rightAssigneeIds = issues.map((issue) => {
      if (issue.assignee === assignee) {
        return issue._id;
      }
    });
    console.info("ids with this assignee: ", rightAssigneeIds);
    return rightAssigneeIds.includes(id);
  };

  const isOpen = (id: string) => {
    const openIds = issues.map((issue) => {
      if (issue.status === "open") {
        return issue._id;
      }
    });
    console.info("open ids", openIds);
    return openIds.includes(id);
  };

  return (
    <IssuesContext.Provider
      value={{ issues, addIssue, deleteIssue, hasAssignee, isOpen }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesContextProvider;
