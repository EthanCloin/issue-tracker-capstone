import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  initialAssigneeValue: string;
  initialStatusValue: string;
}

function IssueFilterForm({ initialAssigneeValue, initialStatusValue }: Props) {
  const [statusFilter, setStatusFilter] = useState(initialStatusValue);
  const [assigneeFilter, setAssigneeFilter] = useState(initialAssigneeValue);
  const navigate = useNavigate();

  function applyFilter(submitEvent: FormEvent): void {
    submitEvent.preventDefault();
    navigate(
      `/?${new URLSearchParams({
        assignee: assigneeFilter,
        status: statusFilter,
      })}`
    );
  }
  return (
    <form className="IssueFilterForm" onSubmit={applyFilter}>
      <h2>Issue Filter</h2>
      <label htmlFor="status">Status</label>
      <input
        type="checkbox"
        name="status"
        id="status"
        value={statusFilter}
        onChange={(changeEvent) => setStatusFilter(changeEvent.target.value)}
      />
      <label htmlFor={"assignee"}>Assignee</label>
      <input
        type={"text"}
        name={"assignee"}
        id={"assignee"}
        value={assigneeFilter}
        onChange={(changeEvent) => setAssigneeFilter(changeEvent.target.value)}
      />
      <input type={"submit"} value={"Apply Filter"} />
    </form>
  );
}

export default IssueFilterForm;
