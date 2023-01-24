import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
const Header = ({click}) => {
  return (
    <View className="bg-[#00ccbb] px-6 pt-10 pb-4 flex-row">
      <TouchableOpacity className="flex-1" onPress={click}>
        <XMarkIcon color="white" />
      </TouchableOpacity>
      <Text className="text-white">Quick Tips</Text>
    </View>
  );
};
export default function Delivery() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  useLayoutEffect(() => {
    navigation.setOptions({
      header: ()=><Header click={()=>navigation.navigate("Home")}/>,
    });
  }, []);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <Text>Delivery</Text>
      <Text>Delivery</Text>
    </View>
  );
}
