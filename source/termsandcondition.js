import React, { useEffect, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import { useSelector } from 'react-redux';



const Termsandconditions = ({navigation}) => {
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
            <Button transparent onPress = {() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style = {{fontSize: 20}}>অসম কাপোৰ</Title>
            <Text style = {{fontSize: 15}}>Assam Textiles </Text>
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
        <Content>
        <Text style= {{fontSize: 25, textAlign: "center"}}>
        TERMS &amp; CONDITIONS 
        </Text>
        <Text style= {{fontSize: 15, fontWeight: "bold"}}>
        1. General
        </Text>
        <Text>
        These general terms and conditions of use apply to all orders placed by the customer (hereinafter referred to as ”you”) on the Assam Textiles App (collectively, the "Andorid-app" or "Ios- app"), through mobile apps or via telephone.

        </Text>
        <Text>
        The terms, conditions and notices contained herein (collectively, "Terms") apply to Assam Textiles. By using this app and/or placing an order, you agree to be bound by the terms and conditions set out herein (the ”Terms”). Please make sure that you have read and understood the Terms before placing your order.On our app products or services ,at any given time does not imply or guarantee that these products or services will be available. We reserve the right to discontinue any product at any time. We reserve the right to amend these Terms from time to time without providing you with prior notice. You understand and agree not to (i) post, transmit, redistribute, upload, or promote any communications or content that could harm or negatively impact our business, products or services; (ii) act in a manner or employ any device that restricts, impairs, interferes or inhibits any other user from using or enjoying the App, or which impacts the security of the Application, or (iii) employ any device or attempt to use any engine, software, tool, agent or other device or mechanism (including without limitation spiders, bots, crawlers, avatars or intelligent agents) to navigate or search the App, or to copy content from the App. 

        </Text>
        <Text style= {{fontSize: 15, fontWeight: "bold"}}>
        2. Prices and delivery charges
        </Text>
        <Text>
        The prices displayed on site includes GST .The delivery charge for each order, if applicable, will be determined by the order size, weight and delivery destination and will be clearly indicated during the order place process. If we are unable to deliver your order in full within one delivery, there will not be an additional charge for any subsequent deliveries. Prices in-store and online may vary.

        </Text>
        <Text style= {{fontSize: 15, fontWeight: "bold"}}>
        3. Ordering/conclusion of contract
        </Text>
        <Text>
        You may order through the App or by telephone. Once you have placed your order and If for any reason we are unable to fulfill your order, we will let you know at the earliest opportunity and refund the applicable amount within 7 working days .

        </Text>
        <Text style= {{fontSize: 15, fontWeight: "bold"}}>
        4. Shipping and Delivery
        </Text>
        <Text>
        We  exercises the utmost diligence in accepting and processing orders and will endeavor to deliver your order to an address which was received at the time of placement of order . Time and dispatch may vary to 2-3 days .After dispatching we will send you the courier slip.

        </Text>
        <Text style= {{fontSize: 15, fontWeight: "bold"}}>
        5.Return Policy
        </Text>
        <Text>
        If customer wants to return the product then courier charges will be borne by the customer or customer can  exchange the product at our Store which is situated at 1st floor, New Market, Fancy Bazaar, Guwahati, Assam - 781001.
        We only accept return if the product recieved was damaged or defective.
        </Text>
        </Content>
        <Footer >
          <FooterTab style = {{backgroundColor: "black"}}>
            <Button full>
              <Text style = {{color: "white", fontFamily: "Cinzel"}} >Over 40 years of experience</Text>
              <Text style = {{color: "white", fontFamily: "Encode", textAlign: "center", textTransform: 'none'}} >assamtextiles.com</Text>
  <Text style = {{color: "white", fontFamily: "Cinzel"}}>New Market, 1st Floor, Fancy Bazar, Guwahati, Assam</Text>

            </Button>
          </FooterTab>
        </Footer>
      </Container>
     );
}
 
export default Termsandconditions;