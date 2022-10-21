import { useContext } from "react";
import { IssueResponse } from "../models/Issue";
import "./Header.css";
import IssuesContext from "../context/IssueContext";

interface Props {
  issues: IssueResponse[];
}

const Header = () => {
  const openCount = [];
  const { addIssue, issues } = useContext(IssuesContext);

  issues.forEach((issue) => {
    if (issue.status === "open") {
      openCount.push({ issue });
    }
  });

  return (
    <div className="Header">
      <h1>** Welcome to the Issues Board **</h1>
      <h2>
        Current Total Issue Count: {issues.length}{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Open Issue
        Percentage: {((openCount.length / issues.length) * 100).toFixed(2)}
      </h2>
    </div>
  );
};

export default Header;
