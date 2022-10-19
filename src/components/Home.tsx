import { useEffect, useState } from "react";
import Issue, { IssueResponse } from "../models/Issue";
import { addIssue, getAllIssues } from "../services/IssueService";
import AddIssueForm from "./add-issue-form";
import "./Home.css";
import IssueList from "./issue-list";
import {useSearchParams} from "react-router-dom";
import {stat} from "fs";

const Home = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [searchParameters] = useSearchParams()
  const assigneeFilter = searchParameters.get("assignee")
  const statusFilter = searchParameters.get("status")
  console.log("assignee: " + assigneeFilter)
  console.log("status: " + statusFilter)
  useEffect(() => {
    // this only runs when the home component is first mounted
    // adding issues to the dependency array makes it keep calling
    // the getAllIssues endpoint.
    getAllIssues().then((res) => {
      setIssues(res);
      console.log("issues: ", res);
    });
  }, []);
  const addNewIssue = (newIssue: Issue) => {
    const rsp = addIssue(newIssue);
    console.log("add response: ", rsp);
    getAllIssues().then((res) => setIssues(res));
  };
  let filteredIssues:Issue[] = []
  issues.forEach((issue)=>filteredIssues.push(issue))
  if (assigneeFilter) {
    filteredIssues.filter((issue)=>issue.assignee === assigneeFilter)
  }
  if (statusFilter) {
    filteredIssues.filter((issue)=>issue.status === statusFilter)
  }
  return (
    <div className="Home">
      <AddIssueForm addNewIssue={addNewIssue} />
      <IssueList issues={filteredIssues}/>
    </div>
  );
};

export default Home;
