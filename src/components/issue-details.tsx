import { FormEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueMetadata } from "../models/Issue";
import { getIssue } from "../services/IssueService";
import "./IssueDetails.css";
import IssuesContext from "../context/IssueContext";

// TODO: this needs to use it's own components, not steal from the issuelistitem
const IssueDetails = () => {
  const issueId = useParams().id;
  const { issues, deleteIssue, setAssignee, setStatus } =
    useContext(IssuesContext);
  let issue = issues[issues.findIndex((issue) => issue._id === issueId)];
  const statusClass =
    issue.status === "closed" ? "issue-status closed" : "issue-status open";
  const [newAssignee, setNewAssignee] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const applyChanges = (submitEvent: FormEvent) => {
    submitEvent.preventDefault();
    if (newAssignee !== "") {
      setAssignee(issue._id, newAssignee);
    }
    issue = issues[issues.findIndex((issue) => issue._id === issueId)];
  };
  const toggleStatus = (currentStatus: string): "open" | "closed" => {
    return currentStatus === "closed" ? "open" : "closed";
  };
  return (
    <div className="IssueListItem">
      <section className="issue-header">
        <p
          className={statusClass}
          onClick={() => setStatus(issue._id, toggleStatus(issue.status))}
        >
          {issue.status}
        </p>
        <button className="delete-issue" onClick={() => deleteIssue(issue._id)}>
          Remove Issue
        </button>
      </section>

      <section className="issue-description">
        <h3 className="title">Description</h3>
        <p className="issue-description">{issue.description}</p>
      </section>

      <section className="issue-assignee">
        <p>
          <strong>Assigned To:</strong> {issue.assignee}
        </p>
      </section>
      <form onSubmit={applyChanges}>
        <label htmlFor={"changeAssignee"}>Change Assignee</label>
        <input
          type={"text"}
          name={"changeAssignee"}
          value={newAssignee}
          onChange={(changeEvent) => setNewAssignee(changeEvent.target.value)}
        />
        <input type={"submit"} value={"Apply Changes"} />
      </form>
    </div>
  );
};

export default IssueDetails;
