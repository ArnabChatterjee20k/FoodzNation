import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={{paddingHorizontal:15,paddingVertical:2}}>
      <CategoryCard title="Card1" imageUrl={"https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg"}/>
      <CategoryCard title="Card1" imageUrl={"https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg"}/>
      <CategoryCard title="Card1" imageUrl={"https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg"}/>
      <CategoryCard title="Card1" imageUrl={"https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"}/>
      <CategoryCard title="Card1" imageUrl={"https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg"}/>
    </ScrollView>
  )
}