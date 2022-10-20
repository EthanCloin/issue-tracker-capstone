import { ReactNode, useState } from "react";
import Issue, { IssueResponse } from "../models/Issue";
import { addIssueToDb } from "../services/IssueService";
import IssuesContext from "./IssueContext";

interface Props {
  children: ReactNode;
}

const IssuesContextProvider = ({ children }: Props) => {
  const [issues, setIssues] = useState<IssueResponse[]>([]);

  const addIssue = (newIssue: Issue) => {
    addIssueToDb(newIssue).then(
      (res) => {
        console.info("ADDED TO DB");
        setIssues([...issues, res]);
      },
      (err) => {
        console.error("UNABLE TO ADD TO DB", err);
      }
    );
  };

  const deleteIssue = (issueId: string) => {};
};
