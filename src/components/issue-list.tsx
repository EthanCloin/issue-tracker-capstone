import Issue from "../models/Issue";
import IssueListItem from "./issue-list-item";

interface Props {
    issues:Issue[]
}

function IssueList({issues}:Props) {
    return (
        <ol className="IssuesList">
            {issues.map((issue)=><IssueListItem issue={issue}/>)}
        </ol>
    )
}



export default IssueList
