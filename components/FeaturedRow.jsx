import { FlatList, ScrollView, Text, View } from "react-native";

import React from "react";
import Card from "./Card";

export default function FeaturedRow({ title, description }) {
  return (
    <View className="flex items-start justify-center px-4 my-2 ">
      <View className="flex flex-col items-start justify-center">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-gray-400">{description}</Text>
      </View>
      <ScrollView
        style={{flex:1}}
        horizontal
        contentContainerStyle={{ paddingHorizontal:2 , paddingVertical:10 }}
        className="pt-4"
      >
        <Card
          imageUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
          header="Nando's"
          star="4.8"
          category="Offers"
          location="UK"
        />
        <Card
          imageUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
          header="Nando's"
          star="4.8"
          category="Offers"
          location="UK"
        />
        <Card
          imageUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
          header="Nando's"
          star="4.8"
          category="Offers"
          location="UK"
        />
      </ScrollView>
    </View>
  );
}
