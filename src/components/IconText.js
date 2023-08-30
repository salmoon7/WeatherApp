import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather}  from 'react-native-vector-icons/Feather';
const IconText = (props) => {
    const{container,textTheme}=styles
    const {iconName,iconColor,bodyText,bodyTextStyles}=props
  return (
    <View style={container}>
        <Feather  name={iconName} size={50}  color={iconColor}/>
            <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',

  },
textTheme:{
  fontWeight:'bold',
}
})
export default IconText

