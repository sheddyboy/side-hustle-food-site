import React, { useState } from "react";
import LoginWrapper, {
  Form,
  Image,
  Links,
} from "../components/styled/LoginWrapper";
import Section from "../components/styled/Section";
import { Link } from "react-router-dom";
import { defaultLoginDetails } from "../defaultValues";
import { LoginDetails, NotifyProps, RegisterDetails } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userDetails, setUserDetails] =
    useState<LoginDetails>(defaultLoginDetails);

  const notify = ({ type, value }: NotifyProps) =>
    type === "success" ? toast.success(value) : toast.error(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = localStorage.getItem("Users");

    if (users) {
      const usersData: RegisterDetails[] = JSON.parse(users);
      const loginValidation = usersData.some(
        (i) =>
          i.email === userDetails.email && i.password === userDetails.password
      );
      if (loginValidation) {
        notify({ type: "success", value: "User found" });
      } else {
        notify({ type: "error", value: "Incorrect Username or Password" });
      }
    } else {
      notify({ type: "error", value: `${userDetails.email} was not found` });
    }
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.type === "email"
      ? setUserDetails((userDetails) => ({
          ...userDetails,
          email: e.target.value,
        }))
      : setUserDetails((userDetails) => ({
          ...userDetails,
          password: e.target.value,
        }));
  };

  return (
    <Section>
      <ToastContainer />
      <LoginWrapper>
        <Image>
          <img src="/login-image.png" alt="" />
        </Image>
        <Form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          <input
            type="email"
            required
            placeholder="Your Email address"
            value={userDetails.email}
            onChange={handleInputs}
          />
          <input
            type="password"
            required
            placeholder="Your Password"
            value={userDetails.password}
            onChange={handleInputs}
          />
          <input type="submit" value="LOGIN" />
          <Links>
            <Link to="/register">Create an account</Link>
            <Link to="/">Forgot Passoword</Link>
          </Links>
        </Form>
      </LoginWrapper>
    </Section>
  );
};

export default Login;
