import axios from "axios";
import Issue, { IssueMetadata } from "../models/Issue";

const dbApiKey = process.env.REACT_APP_DB_API_KEY_DEV || "";
const issuesDocumentUrl = "https://issuetracker-b807.restdb.io/rest/issue";

export const getAllIssues = (): Promise<Issue[]> => {
  return axios
    .get(issuesDocumentUrl, {
      headers: {
        "x-api-key": dbApiKey,
      },
    })
    .then((res) => res.data);
};

export const addIssue = (newIssue: Issue): Promise<IssueMetadata> => {
  return axios({
    method: "post",
    url: issuesDocumentUrl,
    data: {
      assignee: newIssue.assignee,
      description: newIssue.description,
      status: newIssue.status,
    },
    headers: { "x-api-key": dbApiKey },
  }).then((res) => res.data);
};
