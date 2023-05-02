import React from "react";

import Home from "./Home";
import Billing from "../pages/Billing";
import Notification from "../pages/Notification";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";
import Plan from "../pages/Plan";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid app h-100">
      <div className="row h-100">
        <Navbar className="col-md-2 col-sm-12 col-lg-2 order-1 " />
        <main role="main" className="col-md-10 col-sm-12 col-lg-10 order-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Billing" element={<Billing />} />
            <Route path="Notification" element={<Notification />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="Plane" element={<Plan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
