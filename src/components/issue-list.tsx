import { IssueResponse } from "../models/Issue";
import IssueListItem from "./issue-list-item";

interface Props {
  issues: IssueResponse[];
}

function IssueList({ issues }: Props) {
  return (
    <ol className="IssuesList">
      {issues.map((issue) => (
        <IssueListItem key={issue._id} issue={issue} />
      ))}
    </ol>
  );
}

export default IssueList;
