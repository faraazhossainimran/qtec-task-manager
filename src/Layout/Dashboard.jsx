import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Dashboard() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
