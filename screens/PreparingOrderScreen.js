import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createOrders , handleFetchError} from "../utils/utils";
import Prepare from "../assets/Prepare.gif"
export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  // useEffect(() => {
  //   createOrders(params).then(data=>{
        navigation.navigate("Delivery")
  //   })
  //   .catch(err=>{
  //       alert(handleFetchError(err))
  //       navigation.goBack();
  //   })
  //   // setTimeout(() => {
  //   //   navigation.navigate("Delivery")
  //   //   navigation.goBack();
  //   // }, 4000);
  // });
  return (
    <View className="bg-white flex-1 justify-center items-center gap-3">
      <Animatable.Image
        source={Prepare}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Progress.Bar size={50} color="#00ccbb"  indeterminate={true}/>
    </View>
  );
}
