import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { sanityFetcherClient } from "../sanityFetcher";

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityFetcherClient
      .fetch(
        `
        *[_type=="featured" && _id==$id]{
          ...,
              restaurants[]->{
                ...,
                Category->,
                dishes[]->,
                type->{
                  name
                }
              }
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);
   
  return (
    <View className="flex items-start justify-center px-4 my-2 flex-1">
      <View className="flex flex-col items-start justify-center">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-gray-400">{description}</Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 10 }}
        className="pt-4"
      >
        {/* Restaurants Card */}
        
        {restaurants?.map((restaurant) => {
          return (
            <Card
              key={restaurant?.name}
              header={restaurant?.name}
              star={restaurant.rating}
              category={restaurant?.Category?.name}
              dishes={restaurant?.dishes}
              location={restaurant?.address}
              short_desp={restaurant["short_description"]}
              long={restaurant?.long}
              lat={restaurant?.lat}
              imageUrl={restaurant.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
