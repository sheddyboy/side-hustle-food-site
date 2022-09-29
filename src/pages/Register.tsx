import React, { useState } from "react";
import RegisterWrapper, {
  Form,
  Image,
} from "../components/styled/RegisterWrapper";
import Section from "../components/styled/Section";
import { Link } from "react-router-dom";
import { NotifyProps, RegisterDetails } from "../types";
import { defaultRegisterDetails } from "../defaultValues";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userDetails, setUserDetails] = useState<RegisterDetails>(
    defaultRegisterDetails
  );

  const notify = ({ type, value }: NotifyProps) =>
    type === "success" ? toast.success(value) : toast.error(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = localStorage.getItem("Users");

    if (users) {
      const usersData: RegisterDetails[] = JSON.parse(users);
      const databaseValidation = usersData.every(
        (i) => i.email !== userDetails.email
      );
      if (databaseValidation) {
        usersData.push(userDetails);
        localStorage.setItem("Users", JSON.stringify(usersData));
        notify({
          type: "success",
          value: `Registration Successful`,
        });
      } else {
        notify({
          type: "error",
          value: `${userDetails.email} is already in use`,
        });
      }
    } else {
      localStorage.setItem("Users", JSON.stringify([userDetails]));
    }
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.type === "email" &&
      setUserDetails((userDetails) => ({
        ...userDetails,
        email: e.target.value,
      }));
    e.currentTarget.type === "password" &&
      setUserDetails((userDetails) => ({
        ...userDetails,
        password: e.target.value,
      }));
    e.currentTarget.type === "text" &&
      setUserDetails((userDetails) => ({
        ...userDetails,
        name: e.target.value,
      }));
  };
  return (
    <Section>
      <ToastContainer />
      <RegisterWrapper>
        <Image>
          <img src="/register-image.png" alt="" />
        </Image>
        <Form onSubmit={handleSubmit}>
          <h1>Welcome to Lilies!</h1>
          <input
            type="text"
            onChange={handleInputs}
            value={userDetails.name}
            required
            placeholder="Your First Name"
          />
          <input
            type="email"
            onChange={handleInputs}
            value={userDetails.email}
            required
            placeholder="Your Email address"
          />
          <input
            type="password"
            onChange={handleInputs}
            value={userDetails.password}
            required
            placeholder="Your Password"
          />
          <input type="submit" value="SIGN UP" />
          <p>
            Already have an account.
            <span>
              <Link to="/login"> LOGIN</Link>
            </span>
          </p>
        </Form>
      </RegisterWrapper>
    </Section>
  );
};

export default Register;
