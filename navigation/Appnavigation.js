
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logo from '../components/Logo';
import Ulhome from '../components/Ulhome';
import User from '../components/User';
import Lawyer from "../components/Lawyer";
import Ulogin from '../components/Ulogin';
import Onboarding from '../components/Onboarding';
import Userpage from '../components/Userpage';
import Splash from '../components/Splash';
import { Provider } from 'react-redux';
import Store from '../Context/Store';



const Stack=createNativeStackNavigator();

const Appnavigation = () => {
  return (
   <NavigationContainer>
    <Provider store={Store}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
  <Stack.Screen name='Logo' component={Logo} />
  <Stack.Screen name='Ulhome' component={Ulhome}/>

  <Stack.Screen name='User' component={User}/>
  <Stack.Screen name='Lawyer' component={Lawyer}/>
  
  <Stack.Screen name="Ulogin" component={Ulogin}/>
  <Stack.Screen name='Splash' component={Splash}/>
  <Stack.Screen name='Onboarding' component={Onboarding}/>
  <Stack.Screen name='Userpage' component={Userpage}/>
</Stack.Navigator>
    </Provider>
  
   </NavigationContainer>
  )
}

export default Appnavigation