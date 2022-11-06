/*
Currently broken! 
*/
import IssuesContext from "../context/IssueContext";
import { FormEvent, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CreateIssuePage.css";
import { useNavigate } from "react-router-dom";

function CreateIssuePage() {
  const { addIssue } = useContext(IssuesContext);
  // could replace these with ref but first need to understand ref
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [shouldGoHome, setShouldGoHome] = useState(false);

  const navigate = useNavigate();

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    addIssue({
      description: description,
      assignee: assignee,
      status: "open",
    });

    if (shouldGoHome) {
      navigate("/");
    }
  };

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
        onSubmit={(e) => handleSubmission(e)}
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
            id="submitHome"
            type="submit"
            // onSubmit={(e) => handleSubmission(e, "home")}
            color="success"
            disabled={!description || !assignee}
            size="small"
            variant="outlined"
            fullWidth
            value="Go Home"
            onClick={() => setShouldGoHome(true)}
          >
            Create
          </Button>
          <Button
            id="submitStay"
            type="submit"
            // onSubmit={(e) => handleSubmission(e)}
            color="success"
            disabled={!description || !assignee}
            size="small"
            variant="outlined"
            fullWidth
            value="Add Another"
            onClick={() => setShouldGoHome(false)}
          >
            Create & Add Another
          </Button>
        </section>
      </form>
    </div>
  );
}

export default CreateIssuePage;
