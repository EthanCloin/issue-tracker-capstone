import { ReactNode, useEffect, useState } from "react";
import { Issue, IssuePrototype, IssueStatus } from "../models/Issue";
import {
  createIssue,
  deleteIssueFromDb,
  getAllIssues,
  updateIssueInDb,
} from "../services/IssueService";
import IssuesContext from "./IssueContext";

interface Props {
  children: ReactNode;
}

const IssuesContextProvider = ({ children }: Props) => {
  // current concern is with state var issues in home vs ctxt var issues in here
  // should we expose the setIssues as one of our context methods? seems like that would
  // break encapsulation, but we need to update it based on filters and original getAll

  // we can add useEffect here to set initial getAll values
  const [issues, setIssues] = useState<Issue[]>([]);
  const getIssues = () => {
    getAllIssues().then((res) => {
      setIssues(res);
      console.log("issues: ", res);
    });
  };

  useEffect(() => {
    // this only runs when the home component is first mounted
    // adding issues to the dependency array makes it keep calling
    // the getAllIssues endpoint.
    getIssues();
  }, []);

  const addIssue = (newIssue: IssuePrototype) => {
    createIssue(newIssue).then(
      (res) => {
        console.info("ADDED TO DB", res.id);
        setIssues([res, ...issues]);
      },
      (err) => {
        console.error("UNABLE TO ADD TO DB", err);
      }
    );
  };

  const deleteIssue = (issueId: number) => {
    deleteIssueFromDb(issueId).then(
      (res) => {
        console.info("DELETED FROM DB", res);
        setIssues((prev) => {
          const index: number = prev.findIndex((item) => item.id === issueId);
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
      },
      (err) => {
        console.error("UNABLE TO DELETE FROM DB", err);
      }
    );
  };

  const hasAssignee = (id: number, assignee: string): boolean => {
    const rightAssigneeIds = issues.map((issue) => {
      if (issue.assignee === assignee) {
        return issue.id;
      }
    });
    console.info("ids with this assignee: ", rightAssigneeIds);
    return rightAssigneeIds.includes(id);
  };

  const isOpen = (id: number) => {
    const openIds = issues.map((issue) => {
      if (issue.status === "open") {
        return issue.id;
      }
    });
    console.info("open ids", openIds);
    return openIds.includes(id);
  };

  const setStatus = (id: number, status: IssueStatus) => {
    const currentIssueIdx = issues.findIndex((x) => x.id === id);
    const targetIssueData = issues[currentIssueIdx];
    targetIssueData.status = status;

    updateIssueInDb(id, targetIssueData).then(
      (res) => {
        // need to change the issue in state to be the updated v from response
        setIssues((prev) => {
          // should put the returned updated issue in the same place as the prev
          return [
            ...prev.slice(0, currentIssueIdx),
            res,
            ...prev.slice(currentIssueIdx + 1),
          ];
        });
      },
      (err) => {
        console.error("UNABLE TO UPDATE ISSUE!", err);
      }
    );
  };

  const setAssignee = (id: number, assignee: string) => {
    const currentIssueIdx = issues.findIndex((x) => x.id === id);
    const targetIssueData = issues[currentIssueIdx];
    targetIssueData.assignee = assignee;
    //

    updateIssueInDb(id, targetIssueData).then(
      (res) => {
        // need to change the issue in state to be the updated v from response
        setIssues((prev) => {
          // should put the returned updated issue in the same place as the prev
          return [
            ...prev.slice(0, currentIssueIdx),
            res,
            ...prev.slice(currentIssueIdx + 1),
          ];
        });
      },
      (err) => {
        console.error("UNABLE TO UPDATE ISSUE!", err);
      }
    );
  };

  return (
    <IssuesContext.Provider
      value={{
        issues,
        addIssue,
        setStatus,
        setAssignee,
        deleteIssue,
        hasAssignee,
        isOpen,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesContextProvider;
