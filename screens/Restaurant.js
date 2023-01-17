import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanityFetcher";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

export default function Restaurant() {
  const dispatch = useDispatch();

  const {
    params: {
      imageUrl,
      header,
      star,
      category,
      location,
      short_desp,
      long,
      dishes,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      setRestaurant({
        imageUrl,
        header,
        star,
        category,
        location,
        short_desp,
        long,
        dishes,
        lat,
      })
    );
  },[]);
  // if getting error just put dispatch in the dependency array
  
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imageUrl).url(),
            }}
            className="w-full h-56"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-5 left-4 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{header}</Text>
            <View className="flex-row space-x-4 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-gray-400">
                  {star} {category}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="green" opacity={0.5} size={22} />
                <Text className="text-gray-400">{location}</Text>
              </View>
            </View>
            <Text className="text-gray-400 mt-2 pb-4">{short_desp}</Text>
          </View>

          <TouchableOpacity className="flex-row px-3 items-center p-4 space-x-2 border-gray-500">
            <QuestionMarkCircleIcon color="gray" size={22} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ArrowRightIcon color="#00CCBB" size={22} />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="font-extrabold px-4 pt-6 mb-4 text-xl">Menu</Text>
          {/* load different dish rows */}
          {dishes.map(
            (dish) =>
              dish && (
                <DishRow
                  key={dish?._id}
                  id={dish?._id}
                  name={dish?.name}
                  short_description={dish?.short_description}
                  price={dish?.price}
                  image={dish?.image}
                />
              )
          )}
        </View>
      </ScrollView>
    </>
  );
}
