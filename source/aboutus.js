import React, { useEffect, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Row } from 'native-base';
import { useSelector } from 'react-redux';
import { Dimensions, ScrollView, View, TouchableWithoutFeedback, Image } from 'react-native';



const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const Aboutus = ({navigation}) => {
    const {products} = useSelector(state => state.productlist);
    const {categories} = useSelector(state => state.categorylist);
    const cart = useSelector(state => state.productlist.cart);
 

    const [itemsnumber, setitemsnumber] = useState(0);
    useEffect(()=> {
      let items = 0;
     
      cart.map(item => {
          items = items + item.quantity;
      })
      setitemsnumber(items);
  }, [cart,itemsnumber, setitemsnumber])
    return ( 
        <Container>
        

        <Header style = {{backgroundColor: "#fc7b03", backgroundColor: "#fc0388", backgroundColor: "orange"}}>
          <Left>
            <Button transparent           onPress = {() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style = {{fontSize: 20}}>অসম কাপোৰ</Title>
            <Text style = {{fontSize: 15, fontFamily: "Cinzel"}}>Assam Textiles </Text>
          </Body>
          <Right>
          <Button transparent           onPress = {() => navigation.navigate('Cart')}>
              <Icon name='cart' />
              <Badge style= {{backgroundColor: "lightsalmon", marginLeft: 5}}>
            <Text style= {{color: "black"}}>{itemsnumber}</Text>
          </Badge>
            </Button>
          </Right>
        </Header>
        <Content>
          <ScrollView horizontal pagingEnabled removeClippedSubviews = {true} nestedScrollEnabled = {true}>
       
           
<View style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "white"}}>
 
<TouchableWithoutFeedback >
 <Image  
 source = {require('.././assets/shop4.jpeg')}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
</TouchableWithoutFeedback>
</View>
<View style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "white"}}>
 
<TouchableWithoutFeedback >
 <Image  
 source = {require('.././assets/shop2.jpeg')}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
</TouchableWithoutFeedback>
</View>
<View style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "white"}}>
 
<TouchableWithoutFeedback >
 <Image  
 source = {require('.././assets/shop3.jpeg')}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
</TouchableWithoutFeedback>
</View>
<View style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "white"}}>
 
<TouchableWithoutFeedback >
 <Image  
 source = { require('.././assets/shop1.jpeg')}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
</TouchableWithoutFeedback>
</View>
</ScrollView>
<View style = {{borderWidth: 2, borderColor: "orange"}}>

<View style = {{flexDirection: "row", justifyContent: "center"}}>
<Text style = {{fontFamily: "Encode",fontWeight: "bold", fontSize: 20, marginRight: 5}}>{products.length}</Text>
 <Text style = {{fontFamily: "Encode", fontSize: 20,  marginRight: 10}}>Products -</Text>
<Text style = {{fontFamily: "Encode",fontWeight: "bold", fontSize: 20, marginRight: 5}}>{categories.length}</Text>
 <Text style = {{fontFamily: "Encode", fontSize: 20,  marginRight: 10}}>Different Categories</Text>
</View>
<Text style = {{textAlign: "center", fontFamily: 'Cinzel', fontSize: 10}}>Listed currently in our App, Shop Now</Text>
</View>



        <Text style = {{ textAlign: "center", fontSize: 20, fontFamily: "Cinzel", fontSize: 25}}>About Us</Text>
        <Text style = {{textAlign: "center", fontFamily: "Encode"}}>
         Selling Mekhala Chadars has been our Family Business (More than 40 years of experience). Our Shop Assam Textiles was opened in 2006. Since then we have established a reputed name in the Wholesale market. We ventured into online retail in November 2020 when we started selling via whatsapp. After having an amazing response and on request by the customers 

We launched this App to expand our reach and provide quality Mekhala Chadars and Traditional Sarees to everyone at affordable prices.
</Text>
        <Text style = {{textAlign: "center", fontSize: 20, fontFamily: "Cinzel"}}>Why us ?</Text>
        <Text style = {{textAlign: "center",  fontFamily: "Encode"}}>Currently Our app provides you with {categories.length} categories and around {products.length} products to browse.We're dedicated to giving you the very best of Mekhala Chadars and Traditional Sarees.We also have full refund policy incase the item recieved was damaged or defective. We will ask you to pay us the order amount only after confirming and checking the ordered items. If for some reason the item has been already sold we will inform you at the time of placing the order.  </Text>
        <Text style = {{textAlign: "center",fontSize: 20, fontFamily: "Cinzel"}}>About our Shop ?</Text>
        <Text style = {{textAlign: "center",  fontFamily: "Encode"}} > 
      We have more than 100 varieties of Mekhala Chadars with us making it very difficult to keep track of availability of an item. We try our best to keep the items listed in our App up to date (as  per availability), with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]
Opened in 2006 by Vijay Kumar Jain and Ajay Kumar Jain , Assam Textiles has come a long way from its beginnings, with the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over India.

We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
           </Text>
        </Content>
        <Footer >
          <FooterTab style = {{backgroundColor: "#fc9003", backgroundColor: "#fc0384",  backgroundColor: "black"}}>
            <Button full>
              <Text style = {{color: "white"}} >Over 40 years of experience</Text>
              <Text style = {{color: "white", fontFamily: "Encode", textAlign: "center", textTransform: 'none'}} >assamtextiles.com</Text>
   <Text style = {{color: "white"}}>New Market, 1st Floor, Fancy Bazar, Guwahati, Assam</Text>

            </Button>
          </FooterTab>
        </Footer>
      </Container>
     );
}
 
export default Aboutus;