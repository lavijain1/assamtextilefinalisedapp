import React from 'react';
import {  View, StyleSheet, Image, Dimensions} from 'react-native';
import { Text, Container, Content} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNetInfo} from "@react-native-community/netinfo";

const screenheight = Dimensions.get('window').height;

function WelcomeScreen({navigation}) {
  const netInfo = useNetInfo();

    const slides = [
        {
          key: '1',
          title: 'Assam Textiles\n অসম টেক্সটাইল \n  \n Online Store\n Welcome ',
          text: 'Deals in Mekhala Chadars and Traditional Sarees',
          image: require('../assets/ape.jpg'),
          backgroundColor: '#f5b342',
        },
        {
          key: '2',
          title: 'Step -1\n Browse our Products',
          text: ' Browse our wide range of Mekhala Chadars and Traditional Sarees and add desired products to cart.',
          image: require('../assets/search.png'),
          backgroundColor: '#f5bf42',
        },
        {
          key: '3',
          title: 'STEP 2\n Send Screenshot of the Cart via whatsapp',
          text: 'Click on the download cart image button and then open whatsapp button to easily place an order. Drop us a message or give us a ring and we will get back to you at the earliest',
          image: require('../assets/contactus.png'),
          backgroundColor: 'lightsalmon',
        }
      ];
      const _renderItem = ({ item }) => {
        return (
          
          <View  style = {{backgroundColor: `${item.backgroundColor}`, flex: 1}}>
            <View>

            <Text style={styles.title}>{item.title}</Text>
            <Image style = {{width: "100%", height: 250, marginTop: 0}} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
            </View>

          </View>
        );
      }
     
      
    return (
      netInfo.isInternetReachable ? <AppIntroSlider renderItem={_renderItem} data={slides} showSkipButton onSkip = {() => navigation.navigate('Home')} onDone = {() => navigation.navigate('Home')} /> 
      :          <View  style = {{backgroundColor: "#f5b342", flex: 1, justifyContent: "center", alignItems: "center"}}>
                  <Text style = {{ fontFamily: "Cinzel", textAlign: "center", padding: 10}}> No Internet Connection....!</Text>
                    <Image style = {{width: "100%", height: 250}} source= {require('../assets/loading.png')}/>

      </View> 
    );
}

const styles = StyleSheet.create({
  
    title: {
      fontSize: 25,
        marginTop: screenheight/16,
       fontFamily: "Cinzel",
        textAlign: "center",
        padding: 20
    },
    page: {
        backgroundColor: "#ffc073",
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginbutton: {
        width: "100%",
        height: 70,
        backgroundColor: "black",
    },
    infocontain: {
        position: "absolute",
        top: 90,
        width: "100%"
    },
    logo: {
        width: "100%"
    },
    registerbutton: {
        width: "100%",
        height: 70,
        backgroundColor: "lightsalmon" 
    },
    text: {
        textAlign: "center",
        padding: 10,
        fontFamily: "Encode",
        color: "black"
    },
    designtext: {
        position: "absolute",
        top: 550,
        textAlign: "center",
        fontFamily: "Cinzel",
        fontWeight: "bold",
        fontStyle: "italic",
        color: "white",
        fontSize: 20
    },
  
})
export default WelcomeScreen;

