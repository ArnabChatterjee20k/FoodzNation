import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'
export default function CategoryCard({imageUrl,title}) {
  return (
    <TouchableOpacity>
      <Image source={{uri:imageUrl}}/>
    </TouchableOpacity>
  )
}