import React, {  useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { getoffers, initialdata } from './actions/initialdataactions';
import WelcomeScreen from './source/frontpage';
import Productdetails from './source/productdetails';
import Navdraw from './source/Components/Drawer';
import Cartscreen from './source/Cartscreen';
import { Badge, Button, Icon, Text } from 'native-base';

const Stack = createStackNavigator();

const Navigator = () => {
  const cart = useSelector(state => state.productlist.cart);

  const [itemsnumber, setitemsnumber] = useState(0);

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch( initialdata());
    dispatch(getoffers());

  }, [])
  useEffect(()=> {
    let items = 0;
   
    cart.map(item => {
        items = items + item.quantity;
    })
    setitemsnumber(items);
}, [cart,itemsnumber, setitemsnumber])
  

  return (
<NavigationContainer>
<Stack.Navigator initialRouteName = "Frontpage"  screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',

        },
        
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          
          fontFamily: "Cinzel"
        }     
      }} >
  <Stack.Screen
      name = "Frontpage"
      component = {WelcomeScreen}
      options= {{ headerShown: false }} />
  <Stack.Screen
      name = "Home"
      component = {Navdraw}
      options= {{ headerShown: false }} />
       <Stack.Screen 
      name = "Product Details"
      component = {Productdetails}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button style = {{ padding: 10}}transparent onPress = {() => navigation.navigate('Cart')}>
              <Icon style = {{color: "white"}}name='cart' />
              <Badge style= {{backgroundColor: "lightsalmon"}}>
            <Text style= {{color: "black"}}>{itemsnumber}</Text>
          </Badge>
            </Button>
        ),
      })}

      
       />
     <Stack.Screen
      name = "Cart"
      component = {Cartscreen} />
  </Stack.Navigator>


    </NavigationContainer>)
}
 
export default Navigator;