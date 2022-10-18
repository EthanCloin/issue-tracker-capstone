import Issue from "../models/Issue";

interface Props {
    issue:Issue
}

function IssueListItem({issue}:Props) {
    return (
        <li>
            <h3>Description</h3>
            <p>{issue.description}</p>
            <h3>Assignee</h3>
            <p>{issue.assignee}</p>
            <h3>Status</h3>
            <p>{issue.status}</p>
        </li>
    )
}

export default IssueListItem
