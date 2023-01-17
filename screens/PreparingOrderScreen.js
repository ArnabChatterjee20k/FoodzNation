import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Home")
        },4000)
    })
  return (
    <View className="bg-[#00ccbb] flex-1 justify-center items-center gap-3">
      <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Progress.Pie progress={0.9} size={50} color="white" />
    </View>
  );
}
