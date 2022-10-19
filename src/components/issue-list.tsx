import { IssueResponse } from "../models/Issue";
import IssueListItem from "./issue-list-item";

interface Props {
  issues: IssueResponse[];
}

function IssueList({ issues }: Props) {
  return (
    <ol className="IssuesList">
      {issues.map((issue) => (
        <IssueListItem issue={issue} />
      ))}
    </ol>
  );
}

export default IssueList;
