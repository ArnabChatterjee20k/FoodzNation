import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArrowLeftOnRectangleIcon,
  CircleStackIcon,
} from "react-native-heroicons/solid";
import { removeToken } from "../utils/utils";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/authSlice";
import { useNavigation } from "@react-navigation/native";

export default function User() {
    const dispatch = useDispatch()
    const nav = useNavigation()
    const logout = async()=>{
      try {
        await dispatch(removeUser()).unwrap()
      } catch (error) {
        console.log(error)
      }
    }

    const moveToOrders = ()=>{
      nav.navigate("Orders")
    }
  return (
    <View className="gap-3 py-2">
      <TouchableOpacity onPress={moveToOrders} className="flex-row items-center gap-2 p-1 border-b border-b-gray-300">
        <CircleStackIcon size={30} color="black" />
        <Text className="font-bold text-xl">Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout} className="flex-row items-center gap-2 p-1 border-b border-b-gray-300">
        <ArrowLeftOnRectangleIcon size={30} color="black" />
        <Text className="font-bold text-xl">LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
