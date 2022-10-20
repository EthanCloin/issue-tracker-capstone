import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueMetadata } from "../models/Issue";
import { getIssue } from "../services/IssueService";
import "./IssueDetails.css";

// assuming that we get the metadata from performing a
// GET req with the issueId. this may require an update to
// services
const IssueDetails = () => {
  const issueId = useParams().id;
  const [issue, setIssue] = useState<IssueMetadata | null>(null);

  useEffect(() => {
    getIssue(issueId!).then(
      (res) => {
        setIssue(res);
      },
      (err) => {
        console.error("UNABLE TO GET ISSUE", err);
      }
    );
  }, [issueId]);

  // this JSX element should display all the properties seen
  // in a typical issue, plus some extras. it should show
  // a text field where the assignee can be updated, and allow
  // the status to be updated.
  return <div className="IssueDetails">IssueDetails works</div>;
};

export default IssueDetails;
