import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Basket from "../screens/Basket";
import PreparingOrderScreen from "../screens/PreparingOrderScreen";
import Delivery from "../screens/Delivery";
import Restaurant from "../screens/Restaurant";
import User from "../screens/User";

export default function UserNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        {/* screens */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
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
      </Stack.Navigator>
    </>
  );
}
