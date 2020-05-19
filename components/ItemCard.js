import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import Card from './Card'
import {green} from '../constants/colors'
export default ItemCard = props=>
{
    return(
        <View style={{...styles.container,...props.styleCard}}>
        <Card style={styles.card}>
            <View style={styles.favView}>
                <Image style={styles.favImage} source={require('../assets/favorites.png')} />
            </View>
          <View style={{...styles.imageView,...props.styleImage}}><Image source={{uri:props.image}}  style={styles.image} /></View>
        </Card>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.price}>{props.price}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    width:130,
    height:150,
    // padding:5,
    // alignItems:'center',
    margin:10,
},
image:{
    width:90,
    height:90,
    resizeMode:'contain',
    marginLeft:'10%'
},
imageView:{
    width:80,
    height:80,
},  
text:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:5,
    marginLeft:'10%',
},
card:{
    width:'100%',
    height:'75%',
    padding:5,
},
favView:{
width:'100%',
height:'5%',
flexDirection:'row',
},
favImage:{
    width:20,
    height:20,
    resizeMode:'contain',
    marginLeft:'83%',
    marginTop:'2%',   
},
price:{
    fontSize:12,
    fontWeight:'bold',
    color:green,
    marginLeft:'10%'
}
})