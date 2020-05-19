import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {green} from './constants/colors'
import Fruits from './screens/Fruits'
import Snacks from './screens/Snacks'
import Bakery from './screens/Bakery'
import Drinks from './screens/Drinks'
import Vegetables from './screens/Vegetables'

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                          iconName = focused
                            ? require('./assets/home.png')
                            : require('./assets/home-grey.png')
                        } else if (route.name === 'Cart') {
                          iconName = focused ? require('./assets/cart.png') : require('./assets/cart-grey.png');
                        }
                        else if( route.name==='Wishlist')
                        {
                          iconName= focused? require('./assets/wishlist.png') :require('./assets/wishlist-grey.png')
                        }
                        else if( route.name==='Profile')
                        {
                          iconName= focused? require('./assets/profile.png') : require('./assets/profile-grey.png')
                        }
                        return <Image source={iconName} style={styles.image} />;
                      },
                      
                    })} 
                    tabBarOptions={{
                      showLabel:false, showIcon:true,
                    }} >
          <Tab.Screen name="Home" component={HomeScreenStack} />
          <Tab.Screen name="Cart" component={HomeScreenStack}  />
          <Tab.Screen name="Wishlist" component={HomeScreenStack} />
          <Tab.Screen name="Profile" component={HomeScreenStack} />
          </Tab.Navigator>
        </NavigationContainer>
    </View>
  );
}

const HomeScreenStack= props=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
      <Stack.Screen name="Fruits" component={Fruits}  options={Fruits.navigationOptions}/>
      <Stack.Screen name="Snacks" component={Snacks}  options={Snacks.navigationOptions}  />
        <Stack.Screen name="Bakery" component={Bakery} options={Bakery.navigationOptions}/>
        <Stack.Screen name="Vegetables" component={Vegetables} options={Vegetables.navigationOptions}/>
        <Stack.Screen name="Drinks" component={Drinks} options={Drinks.navigationOptions}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:
  {
    width:30,height:35,
    resizeMode:'contain',
  }
});
