import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch } from "react-redux";
import OptionalText from "../components/OptionalText";
import { fetchToken } from "../features/authSlice";

import { handleFetchError } from "../utils/utils";

import Form from "./Form";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = { email, password };
  const nav = useNavigation();

  const moveToRegisterScreen = () => {
    nav.navigate("Register");
  };
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
      console.log("🚀 ~ file: Login.js:45 ~ getUser ~ info", info)
    } catch (error) {
      console.log("🚀 ~ file: Login.js:47 ~ getUser ~ error", error)
      alert(handleFetchError(error.message));
    }
  };
  return (
    <>
      <Form params={formOptions} action={getUser} actionName="Login"/>
      <OptionalText actionText="Not Registered?" linkText="Sign Up" action={moveToRegisterScreen}/>
    </>
  );
}
