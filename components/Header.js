import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native'
import Constants from 'expo-constants'
import {green} from '../constants/colors'
const Header =props=>{
    return(
        <View style={styles.header}  >
            <Text style={styles.headerTitle} >{props.title}</Text>
            <TouchableOpacity style={{marginRight:10,marginLeft:'23%'}}><Image source={require('../assets/search.png')} style={{resizeMode:'contain',width:40,height:40}}/></TouchableOpacity>
        </View> 
    )
}
export default Header

const styles=StyleSheet.create({
    header:{
        backgroundColor:green,
        alignItems:'center',
        // justifyContent:'center',
        paddingTop:Constants.statusBarHeight,
        width:'100%',
        height:'10%',
        flexDirection:'row'
    },
    headerTitle:{
        color:'white',
        fontSize:34,
        marginLeft:'40%',
    },
})