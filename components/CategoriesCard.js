import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import Card from './Card'

export default CategoriesCard = props=>
{
    return(
        <View style={styles.container}>
        <Card >
            <Image source={props.image}  style={styles.image} />
         </Card>
         <Text style={styles.text}>{props.text}</Text>
         </View>
    )
}

const styles=StyleSheet.create({
container:{
    // width:'20%',
    // height:'18%',
    padding:13,
    alignItems:'center',
    marginVertical:10
},
image:{
    width:40,
    height:45,
    resizeMode:'contain',
},
text:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:5,

}
})