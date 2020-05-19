import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import ItemCard from './ItemCard'
export default DetailedList= props=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
            <FlatList  data={props.data} keyExtractor={item => item.name} numColumns={2} renderItem={({item})=>
            <ItemCard  styleCard={styles.card} styleImage={styles.cardImage} name={item.name} image={item.image} price={item.price} />
        }  />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:10,
    },
   card:{
       width:140,
       height:160,
       margin:20,
   },
   cardImage:{
       width:95,
       height:95,
   }
})