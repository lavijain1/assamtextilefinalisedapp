import React, { useEffect, useRef, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import { useSelector } from 'react-redux';
import { View,Image } from 'react-native';



const Howtoorder  = ({navigation}) => {

    const {offers} = useSelector(state => state.categorylist);
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
        <Container >
        

        <Header style = {{backgroundColor: "#fc7b03", backgroundColor: "#fc0388", backgroundColor: "orange"}}>
          <Left>
            <Button transparent onPress = {() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style = {{fontSize: 20}}>অসম কাপোৰ</Title>
            <Text style = {{fontSize: 15, fontFamily: "Cinzel"}}>Assam Textiles </Text>
          </Body>
          <Right>
          <Button transparent onPress = {() => navigation.navigate('Cart')}>
              <Icon name='cart' />
              <Badge style= {{backgroundColor: "lightsalmon", marginLeft: 5}}>
            <Text style= {{color: "black"}}>{itemsnumber}</Text>
          </Badge>
            </Button>
          </Right>
        </Header>
        <Content style = {{backgroundColor: "#FFECBB"}}>
          <Text style = {{ fontSize: 30, marginBottom: 10, marginTop: 3, textAlign: "center", fontFamily: "Cinzel"}}>How to Place an Order ?</Text>
        
            <Text style = {{textAlign : "center"}}>STEP 1 -- Add desired products to Cart</Text>
            <View style = {{flexDirection: "row", flexShrink: 1}}>
            <View style = {{flex: 1}}>
        
        <Image style = {{width: 180, height: 150}} resizeMode = "contain" source = {require('../assets/addtocart.png')} />
            </View>
          <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style = {{fontFamily: "Encode"}}> Browse our extensive range of mekhala chadors, sarees and add desired products to cart.</Text>

          </View>
          </View>
          <Text style = {{textAlign: "center"}}>STEP 2 -- Select Quantity required </Text>
          <View style = {{flexDirection: "row", flexShrink: 1}}>
          

          <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style = {{fontFamily: "Encode"}}> In the Cartscreen, select the quantity of the product required</Text>

          </View>
          <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Image style = {{width: 180, height: 180}} resizeMode = "contain" source = {require('../assets/quantity.png')} />

            </View>

          </View>
          <Text style = {{textAlign: "center"}}>STEP 3 -- Send Screenshot of the Cart via whatsapp</Text>

          <View style = {{flexDirection: "row", flexShrink: 1}}>
            <View style = {{flex: 1}}>
            <Image style = {{width: 180, height: 230}} resizeMode = "contain" source = {require('../assets/contactus.png')} />

            </View>

          <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style = {{fontFamily: "Encode"}}> Click on the open whatsapp button, and send us the downloaded cart image, We are available on +{offers} , Monday - Saturday from 9:30am - 9:30pm. Drop us a message or give us a ring and we'll get back to you at the earliest</Text>

          </View>
          </View>
          <Text style = {{textAlign: "center", marginBottom: 20}}>STEP 4 -- Make Payment and Voila your Order will be Shipped to your Doorstep.</Text>

          <View style = {{flexDirection: "row", flexShrink: 1}}>
           

          <View style = {{flex: 1 , justifyContent: "center", alignItems: "center", marginBottom: 20}}>
          <Text style = {{fontFamily: "Encode"}}>The order will be dispatched to you as soon as payment is recieved and verified. Note: Due to extensive orders or festive season it may take some time for us to dispatch. So please be patient.</Text>

          </View>
          <View style = {{flex: 1}}>
          <Image style = {{width: 180, height: 230}} resizeMode = "contain" source = {require('../assets/payment.png')} />

            </View>
          </View>

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
 
export default Howtoorder ;