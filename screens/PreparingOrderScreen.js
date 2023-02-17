import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createOrders , handleFetchError} from "../utils/utils";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  useEffect(() => {
    createOrders(params).then(data=>{
        navigation.navigate("Delivery")
    })
    .catch(err=>{
        alert(handleFetchError(err))
        navigation.goBack();
    })
    // setTimeout(() => {
    //   navigation.navigate("Delivery")
    //   navigation.goBack();
    // }, 4000);
  });
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
