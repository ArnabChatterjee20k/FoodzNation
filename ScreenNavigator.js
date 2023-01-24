import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsLoggedIn, setSignIn } from "./features/authSlice";
import { getToken, removeToken } from "./utils/utils";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import AuthNav from "./navigator/AuthNav";
import UserNav from "./navigator/UserNav";

export default function ScreenNavigator() {
  const dispatch = useDispatch();
  const setLogIn = useCallback(async () => {
    const token = await getToken();
    if (token) {
      dispatch(setSignIn({ token, isLoggedIn:token&&true }));
    }
  }, []);
  setLogIn();
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log({ isLoggedIn });
  return <>{isLoggedIn ? <UserNav /> : <AuthNav />}</>;
}
