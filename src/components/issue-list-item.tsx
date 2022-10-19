import { IssueResponse } from "../models/Issue";
import "./issue-list-item.css";
interface Props {
  issue: IssueResponse;
}

const IssueListItem = ({ issue }: Props) => {
  const statusClass =
    issue.status == "closed" ? "issue-status closed" : "issue-status open";
  return (
    <ul className="IssueListItem">
      <p className={statusClass}>{issue.status}</p>
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
