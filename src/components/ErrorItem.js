import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import  Feather from 'react-native-vector-icons/Feather'


const ErrorItem=()=>{
    return(
        <View  style={styles.container}>
            <Text style={styles.ErrorMessagw}>Sorry something went wrong</Text>
            <Feather name={'frown'} size={100}  color={'white'}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },
    errorMessage:{
        fontSize:30,
        color:'white',
        marginHorizontal:10,
        textAlign:'center',
    },
})
export default ErrorItem