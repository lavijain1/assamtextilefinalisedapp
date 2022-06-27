import React, { useEffect, useRef, useState } from 'react';
import { Container ,Content,  Button, Icon, Spinner } from 'native-base';

import { View, StyleSheet, Text, ScrollView,Modal, FlatList, Dimensions, Image, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addproducttocart } from '../actions';
import Appbutton from './Components/Appbutton';
import Lister from './Components/Lister';
import { imageapi } from '../apiconfig';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import Card from './Components/Card';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

function Productdetails({navigation, route}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modim, setmodim] = useState('');
    const dispatch = useDispatch();
    const scrollRef = useRef();
    const [entries, setEntries] = useState([]);

    const user = "user";
       const cart = useSelector(state => state.productlist.cart);

    let {products} = useSelector(state => state.productlist);
    const product = route.params.product;
    useEffect(() => {
        let images = [];
        product.productpictures.map(({img}) => images.push({ image: `${imageapi}/${img}`}))
           setEntries(images);
       
       scrollRef !== undefined ? scrollRef.current.scrollTo({x: 0, y: 0, animated: true}) : null;
      

    }, [product])
    const handleaddtocart = (product) => (
        <>
     {(dispatch(addproducttocart(product,undefined , user, cart)))}
          </>
    )
    products = products.filter((p) => p.category?  p.category.name == product.category.name : null);

        products = products.filter(p => p.name !== product.name)
        products = products.sort(() => 0.5 - Math.random());
         products = products.slice(0, 4);
     const swipe  = "(Swipe for next image, Tap to open zoom view)";
  
    return (
        <ScrollView ref={scrollRef} style = {{backgroundColor: "white"}} >
          { entries.length === 1 ?   <ScrollView  removeClippedSubviews = {true} nestedScrollEnabled = {true}>
        {entries.map(item => {
          let uri = item.image;
            return (
<View key = {item.image} style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "orange"}}>
 
<TouchableWithoutFeedback onPress = {() =><> {setModalVisible(true)} {setmodim(item.image)} </>}>
 <Image  
source = {{uri}}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
</TouchableWithoutFeedback>
<Text style = {{fontSize: 10, backgroundColor: "orange", fontWeight: 'bold'}}>Tap on image to open zoom view</Text>

</View>
            )
 
        })}
       
  </ScrollView> :    <ScrollView style = {{  margin: 0}} pagingEnabled horizontal  showsHorizontalScrollIndicator>
        {entries.map(item => {
                     let uri = item.image;

           return (
<View key = {item.image.toString()} style = {{width, alignItems: "center", borderColor: "black", borderWidth: 10, backgroundColor: "orange"}}>
 
<TouchableWithoutFeedback onPress = {() =><> {setModalVisible(true)} {setmodim(item.image)} </>}>
<Image  
source = {{uri}}
 style = {{ width: width ,backgroundColor: "#ffcd70", height: ITEM_HEIGHT, resizeMode: "contain"}}/>

</TouchableWithoutFeedback>
<Text style = {{fontSize: 12, backgroundColor: "orange", fontWeight: 'bold'}}>Showing Image {entries.indexOf(item) +1 } of {entries.length}</Text>
{entries.indexOf(item)+1 !== entries.length ? <Text style = {{fontSize: 12, backgroundColor: "orange", fontWeight: 'bold'}}> {swipe}</Text> : <Text style = {{fontSize: 10, backgroundColor: "orange", fontWeight: 'bold'}}>Tap on image to open zoom view</Text>
}

</View>
            )
 
        })}

  </ScrollView>}
           

    <Text style = {styles.title}>{product.name}</Text>
      <Text style = {styles.subtitle}>Rs {product.price} /-</Text>
      

       <Text style = {styles.description}>{product.description}</Text>
       <Text style = {styles.description}>{product.materialdetails}</Text>
       <Text style = {styles.quantity}>Quantity Left :- {product.quantity}</Text>
       <Appbutton title = "Add to Cart"  color = "orange" fontcolor = "black" onPress = {() => handleaddtocart(product)} height = {35} borderRadius = {30}  fontSize = {15}/>
   
    <Text style= {{textAlign: "center",color: "black", width: "100%", marginBottom: 5,padding: 5, backgroundColor: "#FFECBB", fontFamily: "Encode", fontSize: 15}}>Showing More Items</Text>
        {products !== undefined && products.length > 0?
           <ScrollView removeClippedSubviews = {true} contentContainerStyle = {{flexDirection: 'row', flexWrap: 'wrap'}}>
           {products.map(item =>{ return <Card key = {item._id.toString()} productcard = {item} onPress= {() => navigation.navigate('Product Details', {product: item})}/>
})}
         </ScrollView>     :  <Container>
            {searchstate !== "" ? <Content>
          <Image style = {{width: 180, height: 150, alignSelf: "center"}} source = {require('../assets/search.png')} />

            <Text  style = {{textAlign: "center", fontSize: 18, color: "orange", padding: 10}}> Can't find what you are looking for</Text>
                  </Content>  :   <Content>
               <Text style = {{textAlign: "center", fontSize: 10, color: "orange"}}>Server Loading, please be patient, Thank You!</Text>
                 <Spinner size = "large" color="orange" />
                 <Image style = {{width: 300, height: 300, alignSelf: "center"}} resizeMode = "contain" source = {require('../assets/loading.png')} />

             </Content>
          }
                     

      </Container> }
         

            <Lister image = {require("../logo.png")} title = "Assam Textiles" subtitle = "- Over 40 years of experience"/>
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             

          <ReactNativeZoomableView
   maxZoom={1.5}
   minZoom={0.5}
   zoomStep={0.5}
   initialZoom={1}
   bindToBorders={true}
   captureEvent = {true}

>
<Image  source = {{uri: modim}}
 style = {{ width: width ,backgroundColor: "white", height: ITEM_HEIGHT, resizeMode: "contain"}}/>
         </ReactNativeZoomableView>
         <View style = {styles.pos}>

<TouchableOpacity onPress = {() => setModalVisible(false)}>
<View style = {styles.icon}>
<Icon success name= "close" />

</View>
</TouchableOpacity>
</View>
          </View>
        </View>
      </Modal>

     
    </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
    image: {
        width: "100%",
        height: 400
    },
    title: {
        marginTop: 0,
        color: "black",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    subtitle: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        borderBottomColor: "black",
        borderBottomWidth: 2
    },
    description: {
        marginTop: 5,
        color: "black",
        textAlign: "center",
        fontSize: 15,
        padding: 8,
        fontFamily: "Cinzel"
    },
    quantity: {
        textAlign: "center",
        fontWeight: "bold"
    },

   
    icon: {
        backgroundColor: "orange",
        borderRadius: 20,
         height: 50,
          width: 50,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    centeredView: {
        backgroundColor: "orange",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#ffcd70',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})
export default Productdetails;