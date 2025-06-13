import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import './Login.css'

const Login = () => {
  const { loading, error } = useSelector((state) => state?.auth || {});

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="form_body row g-0">
          <div className="w-full h-screen form-banner position-relative">
            <img src="./assets/images/choice1.avif" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container position-absolute text-white">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
