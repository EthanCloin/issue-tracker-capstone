import { useContext } from "react";
import { useTheme } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { IssueResponse } from "../models/Issue";
import "./Header.css";
import IssuesContext from "../context/IssueContext";
import { useNavigate } from "react-router-dom";

interface Props {
  issues: IssueResponse[];
}

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { issues } = useContext(IssuesContext);

  const openCount = issues.filter((issue) => issue.status == "open").length;
  const openPercent = ((openCount / issues.length) * 100).toFixed(2);

  return (
    <AppBar className="Header" position="sticky">
      <Toolbar className="inner-header">
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Issue Tracker
        </h1>
        <section className="issue-stats">
          <p className="issue-count">Issues: {issues.length}</p>
          <p className="open-percent">Open: {openPercent}%</p>
        </section>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
