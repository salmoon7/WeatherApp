import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-vector-icons/Icon'
import IconText from '../components/IconText'
import moment from 'moment'


const City = (weatherData) => {
    const{name,country,population,sunrise,sunset}=weatherData
    const {container,riseSetWrapper,rowLayout,cityName,cityText,populationText,populationWrapper,countryName,cityImage}=styles
  return (
    <View style={container}>
      
      <ImageBackground
      source={require('../../asset/lagosImage.jpg')}
      style={cityImage}
      >
        <Text style={[cityName,cityText]}>{name}</Text>
        <Text style={[countryName,cityText]}>{country}</Text>
        <View style={populationWrapper}>
            <IconText iconName={'user'}  iconColor={'blue'}
            bodyText={`population:${population}`} bodyTextStyle={populationText}
            />
        </View>
        <View style={[riseSetWrapper,rowLayout]}>
            <IconText  iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyle={riseSetWrapper}
            />
            <IconText  
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyle={riseSetWrapper}
            />
           
        </View>
      </ImageBackground>
    </View>
  )
}

export default City

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    cityImage:{
        flex: 1,
    },
    cityName:{
        fontSize:30,
       },
    countryName:{
        fontSize:40,
       },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white',
    },
    populationWrapper:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row',
    },
    populationText:{
        fontSize:25,
        fontWeight:'bold',
        paddingRight:7.5,
        color:'blue',
    },
    riseSetWrapper:{
        flex:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    rowLayout: {
        flexDirection:'row',
    }
})