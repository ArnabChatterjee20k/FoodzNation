import { Image , View} from "react-native";
import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { handleFetchError } from "../utils/utils";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import OptionalText from "../components/OptionalText";
import { addUser } from "../features/authSlice";
import LoginBg from "../assets/AuthLogo.png"

const Register = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = { email, password , name};
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
      name: "name",
      value: name,
      placeholder: "Enter a valid name",
      setter(text) {
        setName(text);
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

  const moveToLoginScreen = () => {
    nav.navigate("Login");
  };
  const createUser = async () => {
    try {
      const info = await dispatch(addUser(userInfo)).unwrap(); // returns a promise
      // console.log("🚀 ~ file: Register.js:51 ~ createUser ~ info", info)
      
    } catch (error) {
      console.log("🚀 ~ file: Register.js:54 ~ createUser ~ error", error)
      alert(handleFetchError(error.message));
    }
  };
  return (
    <View className="py-6">
    <Image
          source={LoginBg}
          className="w-56 h-56 self-center"
        />
      <Form params={formOptions} action={createUser} actionName="Register" />
      <OptionalText
        actionText="Already Have an Account?"
        linkText="Sign In"
        action={moveToLoginScreen}
      />
    </View>
  );
};

export default Register;
