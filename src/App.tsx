import React, {useState} from 'react';
import './App.css';
import AddIssueForm from "./components/add-issue-form";
import Issue from "./models/Issue";

function App() {
    const [issues, setIssues] = useState<Issue[]>([])
  return (
    <div className="App">
      <AddIssueForm addNewIssue={(newIssue:Issue)=>{
          setIssues((previous)=>[...previous, newIssue])
      }}/>
    </div>
  );
}

export default App;
