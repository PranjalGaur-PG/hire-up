import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import LandingOrg from "./pages/org/LandingOrg";
import LoginOrg from "./pages/org/LoginOrg";
import SignupOrg from "./pages/org/SignupOrg";
import LandingUser from "./pages/user/LandingUser";
import LoginUser from "./pages/user/LoginUser";
import SignupUser from "./pages/user/SignupUser";

import JobPostings from "./pages/jobPostings/JobPostings";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/org" element={<LandingOrg />} />
          <Route path="/org/login" element={<LoginOrg />} />
          <Route path="/org/signup" element={<SignupOrg />} />
          <Route path="/user" element={<LandingUser />} />
          <Route path="/user/login" element={<LoginUser />} />
          <Route path="/user/signup" element={<SignupUser />} />

          <Route path="/jobs" element={<JobPostings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
