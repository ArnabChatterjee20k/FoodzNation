import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, setSignIn } from "../features/authSlice";
import { getInfo } from "../features/inputSlice";
import { handleFetchError, loginUser, setToken } from "../utils/utils";

import Form from "./Form";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = { email, password };
  const formOptions = [
    {
      name: "email",
      value: email,
      placeholder: "Enter a valid email",
      setter(text) {
        setEmail(text);
      },
    },
    {
      name: "password",
      value: password,
      placeholder: "Enter a valid password",
      setter(text) {
        setPassword(text);
      },
    },
  ];
  const getUser = async () => {
    try {
      const info = await dispatch(fetchToken(userInfo)).unwrap(); // returns a promise
    } catch (error) {
      alert(handleFetchError(error.message));
    }
  };
  return (
    <>
      <Form params={formOptions} action={getUser} />
    </>
  );
}
