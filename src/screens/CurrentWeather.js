import React from 'react';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import { weatherType} from '../utilities/weatherType';


const CurrentWeather=(weatherData)=>{
  const{wrapper,container,feels,highlowWrapper,highLow,bodyWrapper,description,message}=styles
  const{main:{temp,feels_like,temp_max,temp_min},weather}=weatherData
  const weatherCondition= weather.main[0]?.main
  return(
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
     
      <View style={container}>
      <Feather name={weatherType[weatherCondition].icon} size={100} color="white"/>
        <Text style={tempStyles }>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>

        <RowText  messageOne={`High:${temp_max}°`}
         messageTwo={`Low:${temp_min}°`}
         containerStyles={highlowWrapper}
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
        />
       
      </View>

      <RowText messageOne={weather[0]?.description } 
      messageTwo={weatherType[weatherCondition]?.message}
      containerStyle={bodyWrapper} 
      messageOneStyles={description} 
      messageTwoStyles={message}
      
      />
      
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
   

  },
  container:{
    
    flex:1,
    alignItems:'center',
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize:25,
    
  },
  high:{
    color:"black",
    fontSize:25
  },
  low:{
    color:"black",
    fontSize:20
  },
  description:{
     fontSize:43,
     color:"black",
  },
  message:{
    fontSize:30,
    color:"black",
  },
  highlowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40,
  }
})
export default CurrentWeather