import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import DeliveryBoy from "../assets/DeliveryBoy.png";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Delivery() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  console.log(
    "🚀 ~ file: Delivery.js:15 ~ Delivery ~ restaurant:",
    restaurant.short_desp
  );

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View className="bg-[#00ccbb] flex-1 pt-5">
      <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity>
          <XMarkIcon
            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>

      <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
        <View className="flex-row justify-between">
          <View className="space-y-1">
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-3xl font-bold">45-55 Minutes</Text>
            <Progress.Bar progress={0.3} width={200} indeterminate={true} />
          </View>
          <Image source={DeliveryBoy} className="h-24 w-16" />
        </View>
        <Text className="text-sm text-gray-400">
          Your order at {restaurant.header} is getting prepared
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-14"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.header}
          description={restaurant.short_desp}
          identifier="origin"
          pinColor="#00ccbb"
        ></Marker>
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-24">
        <Image
          className="h-12 w-12 -scale-x-100 ml-5 bg-white p-4"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3128/3128849.png",
          }}
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">Arnab Chatterjee</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call </Text>
      </View>
    </View>
  );
}
