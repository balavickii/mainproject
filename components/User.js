import { View, Text ,Image,TouchableOpacity, Pressable, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'

const User = () => {
  
  const navigation=useNavigation()

  const ulogin=()=>{
    navigation.navigate("Ulogin")
  }

  const onboard=()=>{
    navigation.navigate("Onboarding")
  }

  return (
   <SafeAreaView className="flex-1  justify-evenly items-center bg-white">
    <View className="flex flex-col justify-center items-center mt-10">
      <Image source={require("../asset/logo.jpg")} style={{width:75,height:75}}/>
      <Text className="text-2xl font-semibold pt-5">Welcome !</Text>
    </View>
    
    <View  className="w-9/12 ">
      <TextInput placeholder='Enter Username' className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg " >

      </TextInput>
      <TextInput placeholder='Enter Email' className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg mt-5" >

      </TextInput>
      <TextInput placeholder='Enter Password' className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg mt-5" >

      </TextInput>
      

      <TouchableOpacity className=" bg-cyan-500 mt-5 py-4 rounded-lg" onPress={onboard}>
        <Text className="text-center text-white font-semibold">Signup</Text>
      </TouchableOpacity>

      <View className="flex flex-row mt-5 justify-center">
        <Text className="text-lg">Are You have Account? </Text>
        <TouchableOpacity onPress={ulogin}>
          <Text className="text-cyan-600 font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
   </SafeAreaView>
  )
}

export default User