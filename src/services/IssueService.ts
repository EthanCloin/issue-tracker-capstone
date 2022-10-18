import axios from "axios";
import Issue from "../models/Issue";

const dbApiKey = process.env.REACT_APP_DB_API_KEY_DEV || "";

export const getAllIssues = (): Promise<Issue> => {
  return axios
    .get("https://issuetracker-b807.restdb.io/rest/issue", {
      headers: {
        "x-api-key": dbApiKey,
      },
    })
    .then((res) => res.data);
};
