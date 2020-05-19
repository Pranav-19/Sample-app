import React from 'react'
import {View,StyleSheet,Image, FlatList,Text,TouchableOpacity} from 'react-native'
import ItemCard from './ItemCard'
import { useNavigation } from '@react-navigation/native';
export default Category= props=>{
    const navigation=useNavigation()

    return(
        <View style={styles.container} >
           <View style={styles.header}> 
           <Text style={styles.text}>{props.category}</Text> 
           <TouchableOpacity onPress={()=>{navigation.navigate(props.screenName)} } ><Text style={{color:'grey'}}>View more</Text></TouchableOpacity>
           </View> 
            <FlatList style={styles.FlatList} data={props.data} horizontal={true} 
            keyExtractor={ item => item.name} showsHorizontalScrollIndicator={false}  renderItem={ ({item}) =>{
                return(
                    <ItemCard name={item.name} image={item.image} price={item.price} />
                )
            }} />
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    // width:'100%',
    // height:'100%',
    padding:8,
},
text:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
},
FlatList:{
    width:'100%',
    height:220,
},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}
})