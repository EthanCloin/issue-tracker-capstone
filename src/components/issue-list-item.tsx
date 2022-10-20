import { useContext } from "react";
import IssuesContext from "../context/IssueContext";
import { IssueResponse } from "../models/Issue";
import "./issue-list-item.css";
interface Props {
  issue: IssueResponse;
}

const IssueListItem = ({ issue }: Props) => {
  const { deleteIssue } = useContext(IssuesContext);
  const statusClass =
    issue.status == "closed" ? "issue-status closed" : "issue-status open";
  return (
    <ul className="IssueListItem">
      <section className="card-header">
        <p className={statusClass}>{issue.status}</p>
        <button className="delete-issue" onClick={() => deleteIssue(issue._id)}>
          Remove Issue
        </button>
      </section>

      <article>
        <h3>Assigned To:</h3>
        <p>{issue.assignee}</p>
      </article>
      <article>
        <h3 className="issue-description-title">Description</h3>
        <p className="issue-description">{issue.description}</p>
      </article>
    </ul>
  );
};

export default IssueListItem;
