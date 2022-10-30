import IssuesContext from "../context/IssueContext";
import { FormEvent, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./CreateIssuePage.css";

function CreateIssuePage() {
  const { addIssue } = useContext(IssuesContext);
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  function handleSubmission(
    submitEvent: FormEvent,
    redirectTo: "home" | "" = ""
  ) {
    submitEvent.preventDefault();
    console.log(redirectTo);
    if (redirectTo === "") {
      console.log("staying here");
      addIssue({
        assignee: assignee,
        description: description,
        status: "open",
      });
    } else {
      console.log("going home");
      submitEvent.preventDefault();
      addIssue({
        assignee: assignee,
        description: description,
        status: "open",
      });
    }
  }
  return (
    <div className="CreateIssuePage">
      <section className="form-header">
        <h2 className="add-title">Create Issue</h2>
        <Button
          className="discard-btn"
          variant="outlined"
          size="small"
          color="error"
        >
          Discard
        </Button>
      </section>
      <form
        className="CreateIssueForm"
        // onSubmit={(submissionEvent) => {
        //   console.log(submissionEvent);
        //   handleSubmission(submissionEvent);
        // }}
      >
        <section className="form-field">
          <label htmlFor="description">Description</label>
          <TextField
            className="description"
            name="description"
            id="description"
            value={description}
            multiline
            fullWidth
            minRows={4}
            onChange={(changeEvent) => setDescription(changeEvent.target.value)}
            required
          ></TextField>
        </section>

        <section className="form-field">
          <label htmlFor="assignee">Assignee</label>
          <TextField
            name="assignee"
            id="assignee"
            value={assignee}
            fullWidth
            onChange={(changeEvent) => setAssignee(changeEvent.target.value)}
            required
          />
        </section>
        <section className="create-buttons">
          <Button
            type="submit"
            onSubmit={(e) => handleSubmission(e, "home")}
            color="success"
            disabled={!description || !assignee}
            size="small"
            variant="outlined"
            fullWidth
            value="Go Home"
          >
            Create
          </Button>
          <Button
            type="submit"
            onSubmit={(e) => handleSubmission(e)}
            color="success"
            disabled={!description || !assignee}
            size="small"
            variant="outlined"
            fullWidth
            value="Add Another"
          >
            Create & Add Another
          </Button>
        </section>
      </form>
    </div>
  );
}

export default CreateIssuePage;
