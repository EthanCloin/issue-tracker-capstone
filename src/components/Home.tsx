import { useContext } from "react";
import "./Home.css";
import IssueList from "./IssuesList";
import { useNavigate, useSearchParams } from "react-router-dom";
import IssueFilterForm from "./issue-filter-form";
import IssuesContext from "../context/IssueContext";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/AddTwoTone";

const Home = () => {
  const [searchParameters] = useSearchParams();

  const assigneeFilter = searchParameters.get("assignee") || "";
  const statusFilter = searchParameters.get("status") || "";
  const navigate = useNavigate();

  const { issues } = useContext(IssuesContext);
  return (
    <div className="Home">
      <Fab
        className="AddIssueButton"
        aria-label="add"
        variant="extended"
        color="error"
        size="large"
        onClick={() => {
          navigate("/issue/new");
        }}
      >
        <AddIcon className="plus-sign" sx={{ mr: 1 }} />
        New Issue
      </Fab>
      <IssueFilterForm
        initialAssigneeValue={assigneeFilter}
        initialStatusValue={statusFilter}
      />
      <IssueList
        issues={issues}
        assigneeFilter={assigneeFilter}
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default Home;
