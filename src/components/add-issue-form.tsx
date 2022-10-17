import Issue from "../models/Issue";
import {useState} from "react";

interface Props {
    addNewIssue: (newIssue: Issue)=>void
}

function AddIssueForm() {
    const [description, setDescription] = useState("")
    const [assignee, setAssignee] = useState("")
    return (
        <form className="AddIssueForm">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={description} onChange={(changeEvent)=>setDescription(changeEvent.target.value)}/>
            <label htmlFor="assignee">Assignee</label>
            <input type="text" name="assignee" id="assignee" value={assignee} onChange={(changeEvent)=>setAssignee(changeEvent.target.value)}/>
        </form>
    )
}

export default AddIssueForm