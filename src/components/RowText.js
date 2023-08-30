import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RowText = (props) => {
    const{messagOneStyles,messageTwoStyles,containerStyles,}=styles
    const{messageOne,messageTwo}=props
  return (
   <View style={containerStyles}>
        <Text style={messagOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
  )
}



const styles = StyleSheet.create({})
export default RowText
