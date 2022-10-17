import Issue from "../models/Issue";

interface Props {
    addNewIssue: (newIssue: Issue)=>void
}

function AddIssueForm() {
    return (
        <form className="AddIssueForm">
        </form>
    )
}

export default AddIssueForm