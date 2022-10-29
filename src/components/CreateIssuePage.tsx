import IssuesContext from "../context/IssueContext";
import { FormEvent, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import "./CreateIssuePage.css";

function CreateIssuePage() {
  const { addIssue } = useContext(IssuesContext);
  const [givenDescription, setGivenDescription] = useState("");
  const [givenAssignee, setGivenAssignee] = useState("");
  function handleSubmission(submitEvent: FormEvent) {
    submitEvent.preventDefault();
    addIssue({
      assignee: givenAssignee,
      description: givenDescription,
      status: "open",
    });
  }
  return (
    <form
      className="CreateIssuePage"
      onSubmit={(submissionEvent) => {
        handleSubmission(submissionEvent);
      }}
    >
      <h2 className="add-title">Add New Issue</h2>
      <section>
        <label htmlFor="description">Description</label>
        <TextField
          className="description"
          name="description"
          id="description"
          value={givenDescription}
          multiline
          fullWidth
          minRows={4}
          onChange={(changeEvent) =>
            setGivenDescription(changeEvent.target.value)
          }
        ></TextField>
      </section>

      <section>
        <label htmlFor="assignee">Assignee</label>
        <TextField
          name="assignee"
          id="assignee"
          value={givenAssignee}
          fullWidth
          onChange={(changeEvent) => setGivenAssignee(changeEvent.target.value)}
        />
        <input type="submit" value="Add New Issue" />
      </section>
    </form>
  );
}

export default CreateIssuePage;
