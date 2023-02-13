import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsLoggedIn, setSignIn } from "./features/authSlice";
import { getToken, removeToken } from "./utils/utils";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

import { getInfo } from "./features/inputSlice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Basket from "./screens/Basket";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";
import Restaurant from "./screens/Restaurant";
import User from "./screens/User";

export default function ScreenNavigator() {
  const dispatch = useDispatch();
  const setLogIn = useCallback(async () => {
    const token = await getToken();
    if (token) {
      dispatch(setSignIn({ token, isLoggedIn: token && true }));
    }
  }, []);
  setLogIn();

  const isLoggedIn = useSelector(getIsLoggedIn,);
  const data= useSelector(state=>state.auth)
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          {/* screens */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="User"
            component={User}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ headerShown: true, animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Delivery" component={Delivery} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login}/>
        </>
      )}
    </Stack.Navigator>
  );
}
