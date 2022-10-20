import { useEffect, useState } from "react";
import Issue, { IssueResponse } from "../models/Issue";
import { addIssue, getAllIssues } from "../services/IssueService";
import AddIssueForm from "./add-issue-form";
import "./Home.css";
import IssueList from "./issue-list";
import {useSearchParams} from "react-router-dom";

const Home = () => {
  const [issues, setIssues] = useState<IssueResponse[]>([]);
  const [searchParameters] = useSearchParams()
  const assigneeFilter = searchParameters.get("assignee")
  const statusFilter = searchParameters.get("status")
  console.log("assigneeFilter: " + assigneeFilter)
  console.log("statusFilter: " + statusFilter)
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
  let filteredIssues:IssueResponse[] = []
  issues.forEach((issue)=>{
    if (assigneeFilter && issue.assignee !== assigneeFilter) {
      return
    }
    if (statusFilter && issue.status !== statusFilter) {
      return
    }
    filteredIssues.push(issue)
  })
  console.log("filtered issues: ", filteredIssues)
  return (
    <div className="Home">
      <AddIssueForm addNewIssue={addNewIssue} />
      <IssueList issues={filteredIssues}/>
    </div>
  );
};

export default Home;
