import Issue from "../models/Issue";
import {FormEvent, useState} from "react";

interface Props {
    addNewIssue: (newIssue: Issue)=>void
}

function AddIssueForm({addNewIssue}:Props) {
    const [givenDescription, setGivenDescription] = useState("")
    const [givenAssignee, setGivenAssignee] = useState("")
    function handleSubmission(submitEvent: FormEvent) {
        submitEvent.preventDefault()
        const newId: number = Math.round(Math.random())
        addNewIssue({id: newId.toString(), assignee:givenAssignee, description:givenDescription, status:"open"})
    }
    return (
        <form className="AddIssueForm" onSubmit={(submissionEvent)=>{handleSubmission(submissionEvent)}}>
            <h2>Add New Issue</h2>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={givenDescription} onChange={(changeEvent)=>setGivenDescription(changeEvent.target.value)}/>
            <label htmlFor="assignee">Assignee</label>
            <input type="text" name="assignee" id="assignee" value={givenAssignee} onChange={(changeEvent)=>setGivenAssignee(changeEvent.target.value)}/>
            <input type="submit" value="Add New Issue"/>
        </form>
    )
}

export default AddIssueForm