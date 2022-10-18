import { useEffect, useState } from "react";
import Issue from "../models/Issue";
import { addIssue, getAllIssues } from "../services/IssueService";
import AddIssueForm from "./add-issue-form";
import "./Home.css";
import IssueList from "./issue-list";

const Home = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

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
    setIssues([...issues, newIssue]);
  };
  return (
    <div className="Home">
      <AddIssueForm addNewIssue={addNewIssue} />
      <IssueList issues={issues}/>
    </div>
  );
};

export default Home;
