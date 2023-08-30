import { StyleSheet, Text,ImageBackground, View ,FlatList,Image,StatusBar,SafeAreaView} from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'




const UpcomingWeather = (weatherData) => {
  
  const renderItem=({item})=>(
    <ListItem   condition={item.weather[0].main}
    dt_txt={item.dt_txt}
    min={item.main.temp_min}
    max={item.main.temp_max} />
  )
  


  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground
       source={require('../../asset/upcomingImage.jpg')}
       style={styles.image}>
      <Text>Upcoming Weather</Text>
      
      <FlatList
      data={weatherData}
      renderItem={renderItem}
      keyExtractor={(item)=>item.dt_txt} 
      />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
   flex:1, 
   marginTop:0,
   backgroundColor:"red",
  },
  
  image:{
    flex:1,

  }
})
export default UpcomingWeather;

