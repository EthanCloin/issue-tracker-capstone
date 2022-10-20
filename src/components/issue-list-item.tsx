import { useContext } from "react";
import IssuesContext from "../context/IssueContext";
import { IssueResponse } from "../models/Issue";
import "./issue-list-item.css";
import {useNavigate} from "react-router-dom";
interface Props {
  issue: IssueResponse;
}

const IssueListItem = ({ issue }: Props) => {
  const navigate = useNavigate()
  const { deleteIssue } = useContext(IssuesContext);
  const statusClass =
    issue.status === "closed" ? "issue-status closed" : "issue-status open";
  return (
    <ul className="IssueListItem">
      <section className="issue-header">
        <p className={statusClass}>{issue.status}</p>
          <button className={"DetailsButton"} onClick={()=>navigate(`/issue/${issue._id}`)}>Details</button>
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
    </ul>
  );
};

export default IssueListItem;
