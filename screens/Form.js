import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { getToken, removeToken, setToken } from "../utils/utils";
import { getInfo, setEmail, setPassword } from "../features/inputSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Form({pressFunc}) {
  const {email,password} = useSelector(getInfo)
  const dispatch = useDispatch()
  return (
    <View className="p-4 space-y-4">
      <View className="gap-1">
        <Text className="text-lg font-bold pl-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={(text)=>dispatch(setEmail({email:text}))}
          placeholder="Enter a valid email"
          className="text-base border border-gray-400 rounded px-2 py-1 focus:border-black"
        />
      </View>
      <View className="gap-1">
        <Text className="text-lg font-bold pl-1">Password</Text>
        <TextInput
          placeholder="Enter a password"
          onChangeText={(text)=>dispatch(setPassword({password:text}))}
          className="text-base border border-gray-400 rounded px-2 py-1 focus:border-black"
        />
      </View>
      <TouchableOpacity onPress={pressFunc} className="flex-row justify-center bg-[#00ccbb] py-2 px-4 rounded">
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
