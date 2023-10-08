import React from 'react'
import  Home from './screens/Home';
import  Message from './screens/Message';
import  ChatBot from './screens/ChatBot';
import  Profile from './screens/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCommunityIcons2 from 'react-native-vector-icons/Entypo'

const Tab=createMaterialBottomTabNavigator();

const Userpage = () => {
 
  return (
    <Tab.Navigator labeled={false} barStyle={{backgroundColor:'white',borderColor:'#EEF2F2',borderTopWidth:2}}  >
        <Tab.Screen name='Home' component={Home}
          options={{ tabBarIcon:({color,size,focused})=>
            <MaterialCommunityIcons name='home' color={color} size={30} style={{color: focused ? '#1ED5D1':'black'}}/>
          }}
        />
        <Tab.Screen name='ChatBot' component={ChatBot}
          options={{ tabBarIcon:({color,size,focused})=>(
            <MaterialCommunityIcons name='robot' color={color} size={30} style={{color: focused ? '#1ED5D1':'black'}}/>
          )}}
        />
        <Tab.Screen name='Message' component={Message}
          options={{ tabBarIcon:({color,size,focused})=>(
            <MaterialCommunityIcons2 name='awareness-ribbon' color={color} size={30} style={{color: focused ? '#1ED5D1':'black'}}/>
          )}}
        />
        <Tab.Screen name='Profile' component={Profile}
          options={{ tabBarIcon:({color,size,focused})=>(
            <MaterialCommunityIcons name='account-circle' color={color} size={30} style={{color: focused ? '#1ED5D1':'black'}}/>
          )}}
        />
      </Tab.Navigator>
  )
}

export default Userpage