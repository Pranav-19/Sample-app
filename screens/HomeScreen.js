import React from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import Header from '../components/Header'
import AllCategories from '../components/AllCategories';
import {green} from '../constants/colors'
import Category from '../components/category'
import {freshProduce,snacks} from '../constants/arrays'


export default class HomeScreen extends React.Component
{
  // static navigationOptions=()=>
  //   ( {
  //       headerTitleStyle: { fontWeight: 'bold',textAlign: 'center' ,alignSelf:'center'},
  //       title: 'Home',
  //       headerStyle: {
  //       backgroundColor: green,
  //       },
  //       headerTintColor: '#fff',
  //       headerRight:()=>(
  //           <TouchableOpacity><Image source={require('../assets/search.png')} style={{resizeMode:'contain',width:30,height:30}}/></TouchableOpacity>
  //       )
  //   })
  render()
  {
  return (
    <ScrollView>
    <View style={styles.container}>
        <Header title="Home" />
        <AllCategories navigation={this.props.navigation} />
        <Text style={styles.text}>Offers</Text>
        <Category category="Fresh Produce"  data={freshProduce} navigation={this.props.navigation} screenName="Fruits" />
        <Category category="Snacks" data={snacks} navigation={this.props.navigation} screenName="Snacks"/>
    </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
      color:green,
      fontSize:20,
      margin:12,
  }
});
