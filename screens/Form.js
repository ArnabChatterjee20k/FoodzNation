import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { getToken, removeToken, setToken } from "../utils/utils";
import { getInfo, setEmail, setPassword } from "../features/inputSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Form({ params , action}) {
  return (
    <View className="p-4 space-y-4">
      {params.map(({ name, value, setter, placeholder },index) => {
        return <View className="gap-1" key={index}>
          <Text className="text-lg font-bold pl-1">{name}</Text>
          <TextInput
            value={value}
            onChangeText={(text) => setter(text)}
            placeholder={placeholder}
            className="text-base border border-gray-400 rounded px-2 py-1 focus:border-black"
          />
        </View>;
      })}
      <TouchableOpacity
        onPress={action}
        className="flex-row justify-center bg-[#00ccbb] py-2 px-4 rounded"
      >
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
