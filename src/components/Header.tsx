import { useContext } from "react";
import { useTheme } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { IssueResponse } from "../models/Issue";
import "./Header.css";
import IssuesContext from "../context/IssueContext";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { issues } = useContext(IssuesContext);

  const openCount = issues.filter((issue) => issue.status == "open").length;
  const openPercent = ((openCount / issues.length) * 100).toFixed(2);
  
  return (
    <AppBar className="Header" position="sticky">
      <Toolbar className="inner-header">
        <section className="issue-stats">
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            {window.location.pathname === ("/") ? "Issue Tracker" : <ArrowBackIcon/>}
          </h1>
          <p className="issue-count">Issues: {issues.length}</p>
          <p className="open-percent">Open: {openPercent}%</p>
        </section>
        {location.pathname == "/" && <SearchBar />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
