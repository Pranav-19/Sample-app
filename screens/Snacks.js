import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import DetailedList from '../components/DetailedList'
import {snacks} from '../constants/arrays'
import {green} from '../constants/colors'
export default class Snacks extends React.Component{

static navigationOptions=()=>
( {
    title: 'Snacks',
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

state={
    data:snacks,
    arrayHolder:snacks,
    
}

render()
{
    
    return(   
    <View style={styles.container}>
    <DetailedList name="Popular Items" data={snacks} />
    </View>
    )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})