import Issue from "../models/Issue";
import IssuesContext from "../context/IssueContext";
import { FormEvent, useState, useContext } from "react";
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
      className="AddIssueForm"
      onSubmit={(submissionEvent) => {
        handleSubmission(submissionEvent);
      }}
    >
      <h2 className="add-title">Add New Issue</h2>
      <section>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={givenDescription}
          onChange={(changeEvent) =>
            setGivenDescription(changeEvent.target.value)
          }
          rows={5}
          cols={30}
        ></textarea>
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

export default CreateIssuePage;
