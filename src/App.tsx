import React from "react";
import "./App.css";
import Home from "./components/Home";
import {
    BrowserRouter as Router, Navigate,
    Route,
    Routes,
} from "react-router-dom";
import IssueDetails from "./components/issue-details";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/issue/:id" element={<IssueDetails/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
