import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../features/authSlice";
import { getInfo } from "../features/inputSlice";
import { handleFetchError, loginUser } from "../utils/utils";
import Form from "./Form";

export default function Login() {
  const dispatch = useDispatch();
  const userInfo = useSelector(getInfo);
  const getUser = async () => {
    try {
      const token = await loginUser(userInfo);
      dispatch(setSignIn({ token }));
    } catch (error) {
      const errorCode = parseInt(error.message);
      alert(handleFetchError(errorCode))
    }
  };
  return <Form pressFunc={getUser} />;
}
