import { View, Text ,SafeAreaView,ScrollView,Image} from 'react-native'
import React from 'react'

const Marriage = () => {
  return (
    <>
    <View className="bg-white h-full w-full">
    <SafeAreaView >
      <View className="flex flex-row items-center justify-center w-full h-10 mt-7 ">
        <Image
        source={require('../carousel_slide/icon.jpg')}
        className=" w-14 h-16 "
        />
        <Text className="text-xl font-bold px-5">LAW FRIEND</Text>
    </View>
    <View className=" mt-8 bg-slate-50 w-screen h-1 mb-5"></View>
    </SafeAreaView>
    <ScrollView>
   <View className="w-11/12 h-14 bg-cyan-500 flex  items-center justify-center rounded-lg mx-4">
     <Text className="text-2xl ">Marriage Act</Text>
     </View>

    </ScrollView>
    </View>
    </>
  )
}

export default Marriage