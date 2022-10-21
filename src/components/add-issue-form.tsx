import Issue from "../models/Issue";
import { FormEvent, useState } from "react";
import "./add-issue-form.css";

interface Props {
  addNewIssue: (newIssue: Issue) => void;
}

function AddIssueForm({ addNewIssue }: Props) {
  const [givenDescription, setGivenDescription] = useState("");
  const [givenAssignee, setGivenAssignee] = useState("");
  function handleSubmission(submitEvent: FormEvent) {
    submitEvent.preventDefault();
    addNewIssue({
      assignee: givenAssignee,
      description: givenDescription,
      status: "open",
    });
  }
  return (
    <form
      className="AddIssueForm"
      onSubmit={(submissionEvent) => {
        handleSubmission(submissionEvent);
      }}
    >
      <h2 className="add-title">Add New Issue</h2>
      <section>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={givenDescription}
          onChange={(changeEvent) =>
            setGivenDescription(changeEvent.target.value)
          }
        />
      </section>

      <section>
        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          name="assignee"
          id="assignee"
          value={givenAssignee}
          onChange={(changeEvent) => setGivenAssignee(changeEvent.target.value)}
        />
        <input type="submit" value="Add New Issue" />
      </section>
    </form>
  );
}

export default AddIssueForm;
