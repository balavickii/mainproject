import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem,{SLIDER_WIDTH,ITEM_WIDTH} from './CaroselCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const data =[
    {
      title:"First act",
      body: "First act details..."
    },
    {
      title:"Second act",
      body: "Second act details..."
    },
    {
      title:"Third act",
      body: "Third act details..."
    },
    {
      title:"Fourth act",
      body: "Fourth act details..."
    },
    {
      title:"Fifth act",
      body: "Fifth act details..."
    },
    {
      title:"Sixth act",
      body: "Sixth act details..."
    }
  ]
  
  const isCarousel=React.useRef(null)
  const [index,setIndex]=useState(0)
  const navigation=useNavigation();
  return (
   
    
    <SafeAreaView style={styles.container}>
      <Carousel
            layout='default'
            data={data}
            renderItem={CarouselCardItem}
            // layoutCardOffset={5}
            // ref={isCarousel}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            // inactiveSlideShift={0}
            // onSnapToItem={(index)=>setIndex(index)}
      // useScrollView={true}
      />     
    </SafeAreaView>
   
   
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    padding:30
  },
})
export default Home