import { View, Text ,Image,TouchableOpacity,  SafeAreaView,  TextInput, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'
import {app,auth,db}from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
const User = () => {
  
  const navigation=useNavigation()

  const ulogin=()=>{
    navigation.navigate("Ulogin")
  }

  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const handleSignup= async ()=>{

      try {
        const res=await createUserWithEmailAndPassword(auth,email,password)
        const data={
          id:res.user.uid,
          name:name,
          providerData:res.user.providerData[0]
        }
        await setDoc(doc(db,"Users",res.user.uid),data)

        const docref=doc(db,"Users",res.user.uid)
        const docsnap= await getDoc(docref)
        if(docsnap.exists())
        {
          alert(docsnap.data().name)
        }

        else{
          alert("No dtaa")
        }

        navigation.navigate("Ulogin")
      } catch (error) {
        
      }


  }

  return (
   <SafeAreaView className="flex-1  justify-evenly items-center bg-white py-10">
       
    {/* avator section */}

    <View>
       <TouchableOpacity className="w-24 h-24  border-2 border-cyan-600 rounded-full realtive ">
        <Image source={{
          uri:"https://cdn.sanity.io/images/e3a07iip/production/58efab3fcd310ee26c62f8df400b0048881bba3b-1083x1083.png"
        }} className="w-full h-full"
        resizeMode='contain'/>
         <View className="w-4 h-4 bg-cyan-600 absolute top-0 rounded-full right-3 items-center justify-center "></View>
       </TouchableOpacity>
      
         <Text className="text-sm font-semibold pt-5 text-center">Welcome !</Text>
         
    </View>
    <View  className="w-9/12 mt-7 ">
      <TextInput onChangeText={setname} placeholder='Enter Username'  className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg " >

      </TextInput>
      <TextInput onChangeText={setemail}placeholder='Enter Email' on className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg mt-5" >

      </TextInput>
      <TextInput onChangeText={setpassword} placeholder='Enter Password' className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg mt-5" >

      </TextInput>
      

      <TouchableOpacity className=" bg-cyan-500 mt-5 py-4 rounded-lg" onPress={handleSignup}>
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