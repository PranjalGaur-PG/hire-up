import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/alert/Alert";
import Landing from "./pages/landing/Landing";
import NavDisplay from "./components/navbar/NavDisplay";

import PrivateRoute from "./components/routing/PrivateRoute";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import OrgDashboard from "./pages/org-dashboard/OrgDashboard";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import LandingOrg from "./pages/org/LandingOrg";
import LandingUser from "./pages/user/LandingUser";

import JobPostings from "./pages/jobPostings/JobPostings";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavDisplay />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/org" element={<LandingOrg />} />
          <Route path="/user" element={<LandingUser />} />
          <Route path="/jobs" element={<JobPostings />} />
          <Route
            path="user-dashboard"
            element={<PrivateRoute component={UserDashboard} />}
          />
          <Route
            path="org-dashboard"
            element={<PrivateRoute component={OrgDashboard} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
