import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import "./DashboardCards"
import DashboardCards from "./DashboardCards";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success"> </i>
          </h1>
          <h3>Manage Digital Blood Bank System </h3>
          <hr />
          <p>
            <DashboardCards/>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
