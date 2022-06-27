import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Mainscreen from '../mainscreen';
import {
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import Aboutus from '../aboutus';
import Howtoorder from '../howtoorder';
import Termsandconditions from '../termsandcondition';
import Categoryscreen from '../Categoryscreen';
import { handlecategoryfilter, pagechange, searchfield } from '../../actions';
import {useNetInfo} from "@react-native-community/netinfo";

const Drawer = createDrawerNavigator();



function Navdraw(props) {
  const netInfo = useNetInfo();

    const {categories} = useSelector(state => state.categorylist);
    const dispatch = useDispatch();
    const handlecatpress = (category) => {
      dispatch(handlecategoryfilter(category));
    }
    const customContentDrawerComponent = ({navigation}) => (
      <DrawerContentScrollView {...props} style = {{backgroundColor: "#ffb36b"}}>
        <Image source= {require('../../logo.png')} style = {{alignSelf: "center", width: 200, height: 150, borderRadius: 2}} />
                          <DrawerItem  style = {{backgroundColor: "orange"}} key =  "All Products" label= "All Products" onPress = {() => {dispatch(searchfield(""));  dispatch(pagechange(1)); navigation.navigate('All Products')}}/>

{netInfo.isInternetReachable ? categories.map(cat => {
               return( 
                  <DrawerItem key = { `${cat.name}`}  label={`${cat.name}`} onPress = {() =>{ dispatch(searchfield("")); dispatch(pagechange(1)); handlecatpress(cat); navigation.navigate('Category Products')}}/>
                 )

        }): null}
                          <DrawerItem key = "How to Place an Order" label="How to Place an Order" onPress = {() => navigation.navigate('How to Place an Order')} />
                          <DrawerItem key ="About Us" label="About Us" onPress = {() => navigation.navigate('About Us')}/>
                          <DrawerItem key = "Terms and Conditions" label="Terms and Conditions" onPress = {() => navigation.navigate('Terms and Conditions')}/>

    </DrawerContentScrollView>    )

    return (
    <Drawer.Navigator initialRouteName="All Products"  drawerContent={(props) => customContentDrawerComponent(props) }>
    <Drawer.Screen  name="All Products" component={Mainscreen} />
    <Drawer.Screen  name="Category Products" component={Categoryscreen} />

        
           
    <Drawer.Screen name="How to Place an Order" component={Howtoorder} />
    <Drawer.Screen name="About Us" component= {Aboutus} />
    <Drawer.Screen name="Terms and Conditions" component= {Termsandconditions} />

  </Drawer.Navigator>
    );
}

export default Navdraw;