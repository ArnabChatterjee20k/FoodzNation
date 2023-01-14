import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

export default function Counter() {
  return (
    <View className="bg-white px-4">
      <View className="flex-row items-center space-x-3">
        <TouchableOpacity>
          <MinusCircleIcon size={40} color="#00CCBB"/>
        </TouchableOpacity>
        <Text className="text-xl">0</Text>
        <TouchableOpacity>
          <PlusCircleIcon size={40} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
