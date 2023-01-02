import { Text, View, Image, TouchableOpacity } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import React from "react";
import { urlFor } from "../sanityFetcher";

export default function Card({ imageUrl, header, star, category, location ,short_desp,long,dishes,lat }) {

  return (
    <>
      {/* card */}
      <TouchableOpacity className="bg-white shadow mx-2">
        <Image
          className="h-32 w-56"
          source={{
            uri: urlFor(imageUrl).url(),
          }}
        />
        {/* Content */}
        <View className="p-2">
          {/* header */}
          <Text className="text-lg font-bold">{header}</Text>
          {/* subcontent */}
          <View className="px-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon width={15} color="green" opacity={0.5} />
              <Text className="text-gray-400">{star}</Text>
              <Text className="text-gray-400">{category}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="green" opacity={0.5} size={15}/>
              <Text className="text-gray-400">{location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
