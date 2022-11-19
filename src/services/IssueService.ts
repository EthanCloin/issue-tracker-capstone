import axios from "axios";
import { IssuePrototype, Issue } from "../models/Issue";

const backendDevURL = "http://24.199.84.215:8000";

export const getAllIssues = (
  offset?: number,
  limit?: number
): Promise<Issue[]> => {
  return axios
    .get(`${backendDevURL}/issues/`, {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((res) => res.data);
};

export const getIssue = (id: number, all_details?: boolean): Promise<Issue> => {
  return axios
    .get(`${backendDevURL}/issues/${id}`, {
      params: {
        all_details: all_details,
      },
    })
    .then((res) => res.data);
};

export const createIssue = (newIssue: IssuePrototype): Promise<Issue> => {
  return axios({
    method: "post",
    url: `${backendDevURL}/issues`,
    data: {
      title: newIssue.title || "",
      assignee: newIssue.assignee,
      description: newIssue.description,
      status: newIssue.status,
    },
  }).then((res) => res.data);
};

export const deleteIssueFromDb = (id: number): Promise<Issue> => {
  return axios({
    method: "delete",
    url: `${backendDevURL}/issues/${id}`,
  }).then((res) => res.data);
};

export const updateIssueInDb = (
  id: number,
  newIssue: IssuePrototype
): Promise<Issue> => {
  return axios({
    method: "put",
    url: `${backendDevURL}/issues/${id}`,
    data: newIssue,
  }).then((res) => res.data);
};
