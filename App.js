import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs';
import { ActivityIndicator,View,StyleSheet,PermissionsAndroid} from 'react-native';
import React,{useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import  {WEATHER_API_KEY}  from '@env';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

const App=()=>{
  const [loading,error,weather]=useGetWeather()
  if(weather && weather.list && !loading){
    return (
      <NavigationContainer>
       <Tabs weather={weather} />
       
     </NavigationContainer> 
          )
  }

  return(
    <View style={styles.container}>
  {error ?( <ErrorItem/>)
    :(
      <ActivityIndicator size={'large'} color={'blue'} /> 
    )}
 
    </View>
  )
}

const styles=StyleSheet.create({
container:{
  justifyContent: 'center',
  flex: 1,
},
})
export default App

