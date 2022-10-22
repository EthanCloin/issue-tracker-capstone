import { useContext } from "react";
import { Button, Card, CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IssuesContext from "../context/IssueContext";
import { IssueResponse } from "../models/Issue";
import "./IssueListItem.css";
import { useNavigate } from "react-router-dom";
interface Props {
  issue: IssueResponse;
}

const IssueListItem = ({ issue }: Props) => {
  const { deleteIssue, setStatus } = useContext(IssuesContext);

  const toggleStatus = (currentStatus: string): "open" | "closed" => {
    return currentStatus === "closed" ? "open" : "closed";
  };

  const navigate = useNavigate();

  const statusColor = issue.status === "closed" ? "success" : "error";
  return (
    <Card className="IssueListItem" variant="outlined">
      <section className="issue-header">
        <Button
          className="issue-status"
          variant="contained"
          color={statusColor}
          size="large"
          onClick={() => setStatus(issue._id, toggleStatus(issue.status))}
        >
          {issue.status}
        </Button>

        <Button
          className="delete-issue"
          onClick={() => deleteIssue(issue._id)}
          variant="outlined"
          endIcon={<DeleteIcon />}
          size="small"
        >
          Remove
        </Button>
      </section>

      <CardActionArea
        className="issue-description"
        onClick={() => navigate(`/issue/${issue._id}`)}
      >
        <h3 className="title">Description</h3>
        <p className="issue-description">{issue.description}</p>
        <section className="issue-assignee">
          <p>
            <strong>Assigned To:</strong> {issue.assignee}
          </p>
        </section>
      </CardActionArea>
    </Card>
  );
};

export default IssueListItem;
