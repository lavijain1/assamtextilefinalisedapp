import React, {  useEffect, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Spinner, Badge, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Components/Card';
import {  TextInput, TouchableWithoutFeedback, Keyboard, Image, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import {  searchfield } from '../actions/signupaction';
import FIcon from 'react-native-vector-icons/FontAwesome';

import {useNetInfo} from "@react-native-community/netinfo";
import paginate from '../Pagination/paginate';
import { pagechange } from '../actions';
import Pagination from '../Pagination/pagination';
import _ from 'lodash';


const Categoryscreen = ({navigation}) => {
  const netInfo = useNetInfo();

  const dispatch = useDispatch();
    let {products:prodi,productscopy, currentPage} = useSelector(state => state.productlist);
    const cart = useSelector(state => state.productlist.cart);
    const [itemsnumber, setitemsnumber] = useState(0);
    const [filter, setfilter] = useState('');
    const [datefilter, setdatefilter] = useState('');
    const {categoryfilter} = useSelector(state => state.categorylist);
    const {searchfield: searchstate} = useSelector(state => state.user);
    let products = prodi.slice();

    useEffect(()=> {
      let items = 0;
     
      cart.map(item => {
          items = items + item.quantity;
      })
      setitemsnumber(items);
  }, [cart,itemsnumber, setitemsnumber, currentPage])
  const Pagechange = (page) => {
    dispatch(pagechange(page));
   }
    products = products.filter((p) => p.category?  p.category.name == categoryfilter : null);
    productscopy = productscopy.filter((p) =>p.category?  p.category.name == categoryfilter : null);
    if(searchstate !== "") {
      currentPage = 1;
      products = products.filter(product => product.name.toLowerCase().indexOf(searchstate.toLowerCase())!== -1)
  }
  const { pageSize, error} = useSelector(state => state.productlist);
    let pageproduct;
  
    const handlepricefilter = () => {
      if (filter === 'increasing' ){
        if(currentPage !== 1){
          dispatch(pagechange(1));
  
        }
      
        setdatefilter('');
        setfilter('decreasing')
      }
      else{
        if(currentPage !== 1){
          dispatch(pagechange(1));
  
        }
            setdatefilter('');
        
          setfilter('increasing')
  
      }
  }
  
  const handledatefilter = () => {
    if(datefilter === 'newly'){
      if(currentPage !== 1){
        dispatch(pagechange(1));

      }
  
      setfilter('');
  
    setdatefilter('oldly')
    }
    else{
      if(currentPage !== 1){
        dispatch(pagechange(1));

      }
        setfilter('');
  
     setdatefilter('newly')
    }
  }
  switch(filter){

    case 'increasing':
      products.sort((a,b)=> {
        return ((b.offerprice ? b.offerprice : b.price) -  (a.offerprice ? a.offerprice : a.price));
      })
      break;
    case 'decreasing':
      products.sort((a, b) => {
        return ((a.offerprice ? a.offerprice : a.price)- (b.offerprice ? b.offerprice : b.price));
        // return (b.createdAt - a.createdAt);
      });
    break;

  };


  switch(datefilter){
    case 'newly':
      products.reverse();
      break;
    case 'oldly':
      products.sort((a,b)=> {
          return (a.createdAt - b.createdAt);
        })
       break;

  }
const count = products.length;

pageproduct = paginate(products, currentPage, pageSize);
    return ( 
        <Container>
        

        <Header style = {{backgroundColor: "#fc7b03", backgroundColor: "#fc0388", backgroundColor: "orange"}}>
          <Left>
            <Button transparent onPress = {() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body >
            <Title style = {{fontSize: 20}}>অসম টেক্সটাইল</Title>
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
        <Header searchBar rounded style = {{backgroundColor: "white", justifyContent: "space-between",alignItems: "center"}}>
        <TouchableWithoutFeedback 
onPress={() => Keyboard.dismiss()}> 
<>
<TextInput value = { searchstate} maxLength = {50} style = {{width: "100%"}} onChangeText={text =>     dispatch(searchfield(text))} placeholder = {`Type here to search in ${categoryfilter}`} />
                    </>
</TouchableWithoutFeedback>
                </Header>
    <Text style= {{textAlign: "center", marginTop: 5, marginBottom: 5, padding: 5, backgroundColor: "#FFECBB", fontFamily: 'Encode', fontSize: 15}}>Showing {products.length} {categoryfilter} </Text>
    <View style = {{ flexDirection: "row"}}>
  <TouchableOpacity onPress = {handlepricefilter} style = {{ flexDirection: "row"}}>

<Text style = {{  marginLeft: 15}} >Sort by Price </Text>
<FIcon name="unsorted" size={24} color="black" />    

</TouchableOpacity>
<TouchableOpacity onPress = {handledatefilter} style = {{ flexDirection: "row"}}>

<Text style = {{  marginLeft: 15}} >Sort by date added</Text>
<FIcon name="unsorted" size={24} color="black" />    

</TouchableOpacity> 
    </View>  

        {netInfo.isInternetReachable && pageproduct !== undefined && pageproduct.length > 0 ?    <ScrollView  removeClippedSubviews = {true} contentContainerStyle = {{flexDirection: 'row', flexWrap: 'wrap'}}>
                                 {pageproduct.map(item =>{ return <Card key = {item._id} productcard = {item} onPress= {() => navigation.navigate('Product Details', {product: item})}/>
})}
                               </ScrollView>    
         :   <Container>
              {searchstate !== "" ? <Content>
            <Image style = {{width: 180, height: 150, alignSelf: "center"}} resizeMode = "contain" source = {require('../assets/search.png')} />

              <Text  style = {{textAlign: "center", fontSize: 18, color: "orange", padding: 10, fontFamily: 'Cinzel'}}> Can't find what you are looking for, try searching in the All products tab from top left button.</Text>
                    </Content>  :   <Content>
                 <Text style = {{textAlign: "center", fontSize: 10, color: "orange"}}>Server Loading, please be patient, Thank You!</Text>
                   <Spinner size = "large" color="orange" />
                   <Image style = {{width: 300, height: 300, alignSelf: "center"}} resizeMode = "contain" source = {require('../assets/loading.png')} />

               </Content>
            }
                       

        </Container>}
        <Pagination  pageSize = {pageSize} count = {count} currentPage = {currentPage}  Pagechange={Pagechange} />

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
 
export default Categoryscreen;