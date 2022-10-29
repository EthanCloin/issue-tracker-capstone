import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import IssueDetails from "./components/issue-details";
import Header from "./components/Header";
import CreateIssuePage from "./components/CreateIssuePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue/:id" element={<IssueDetails />} />
          <Route path="/issue/new" element={<CreateIssuePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
