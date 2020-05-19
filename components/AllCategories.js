import React from 'react'
import {View,StyleSheet,Image, FlatList,Text,TouchableOpacity} from 'react-native'
import CategoriesCard from './CategoriesCard'

export default AllCategories= props=>{
const data=[{ image: require('../assets/fruits.png'), text:'Fruits'}, 
{image:require("../assets/vegetables.png"), text:'Vegetables'}, {image:require("../assets/drinks.png"), text:'Drinks'},
{image:require("../assets/bakery.png"), text:"Bakery"} ]

    return(
        <View style={styles.container} >
            <Text style={styles.text}>All Categories</Text>
            <FlatList data={data} horizontal={true} 
            keyExtractor={ item => item.text} showsHorizontalScrollIndicator={false}  renderItem={ ({item}) =>{
                return(
                    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.text)}} ><CategoriesCard text={item.text} image={item.image}/></TouchableOpacity>
                )
            }} />
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    width:'100%',
    height:195,
    padding:8,
},
text:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:10,
},
})