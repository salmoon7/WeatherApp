import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';




const Tab=createBottomTabNavigator()
const Tabs=()=>{
    return (
        
          <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            tabBarStyle:{
                backgroundColor:'#8e3e5f'
            },
            headerStyle:{
                backgroundColor:'#8e3e5f'
            },
            headerTitleStyle:{
                fontWeight:'bold',
                fontSize:25,
                color:'tomato',
            }


            
          }}>
            <Tab.Screen
            name={'current'}
           
            options={{
              tabBarIcon:({focused})=>(<Feather  name={'droplet'}  size={25}  color={focused?'tomato':'black'}/>)
            }}
            >
              {()=>   <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
      
            <Tab.Screen
            name={'Upcoming'}
           
            options={{
              tabBarIcon:({focused})=>(<Feather  name={'clock'}  size={25} color={focused?'tomato':'grey'}/>)
            }}
            >
              {()=> <UpcomingWeather  weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen
            name={'city'}
            
            options={{
              tabBarIcon:(focused)=>(<Feather name={'droplet'} size={25} color={focused?'tomato':'grey'}/>)
            }}
            >
              {()=><City weatherData={weather.city}    />}
            
            </Tab.Screen>
       </Tab.Navigator>
     
    )       
}
export default Tabs

