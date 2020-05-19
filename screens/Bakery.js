import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import DetailedList from '../components/DetailedList'
import {bakery} from '../constants/arrays'
import {green} from '../constants/colors'

export default class Bakery extends React.Component{

    static navigationOptions=()=>
    ( {
        title: 'Bakery',
        headerStyle: {
        backgroundColor: green,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight:()=>(
            <TouchableOpacity><Image source={require('../assets/search.png')} style={{resizeMode:'contain',width:40,height:40}}/></TouchableOpacity>
        )
    })
render()
{    return(   
    <View style={styles.container}>
    <DetailedList name="Popular Items" data={bakery} />
    </View>
    )}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})