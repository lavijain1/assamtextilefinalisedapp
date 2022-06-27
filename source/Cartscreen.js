import { Button, Container,Icon,  } from 'native-base';
import React, { useEffect, useState, useRef } from 'react';
import {  View, Linking, Platform,Text, Image, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Cartitem from './Components/Cartitem';
import { deletecartproduct, cartreset } from '../actions/dashboard/productactions';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { Permissions } from 'react-native-unimodules';
import { ScrollView } from 'react-native-gesture-handler';
import { askuser } from '../actions';
import * as StoreReview from 'expo-store-review';


function Cartscreen(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.productlist.cart);
    const {offers} = useSelector(state => state.categorylist);

    const viewshotref = useRef(null);
    const [totalamount, settotalamount] = useState(0);
    const [itemsnumber, setitemsnumber] = useState(0);
    useEffect(()=> {
        let amount = 0;
        let items = 0;
       
        cart.map(item => {
            amount += item.price*item.quantity;
            items = items + item.quantity;
        })
        settotalamount(amount);
        setitemsnumber(items);
    }, [cart,totalamount, itemsnumber, settotalamount, setitemsnumber, handledelete])
    

   



const saveFile = async (fileUri) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      console.log("download");
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync("Download", asset, false)
        Alert.alert(
          'Your Cart has been downloaded, its in your download Folder',
          'Click the open whatsapp button to easily send the image to us. Thank You',
          [
            {
              text: 'Thank You'
            },
    
          ],
          { cancelable: true }
        );    }
}
    const handledelete = (product) => {
        dispatch(deletecartproduct(product, totalamount));

    }

    const handledeleteall = () => {
        dispatch(cartreset());
    }
    const onCapture = uri => {
     viewshotref.current.capture().then(uri => {
    
      saveFile(uri);
      });
    }
    const onreviewclick = () => {
        alert("Please Give us a review, if you liked shopping in our app. Thank You.");
        if(StoreReview.isAvailableAsync()){
          StoreReview.requestReview();
        }else{
          alert("Thank you. You have already given us a review")
        }
      }
      
    const  openWhatsApp = () => {

      
      let msg = "Assam Textiles - Place Order (Send Screenshot of the cart to this number)"
      let phoneWithCountryCode =  offers;
      let mobile = Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;

      if (mobile) {
        if (msg) {
          let url =
            "whatsapp://send?text=" +
            msg +
            "&phone=" +
            mobile;
          Linking.openURL(url)
            .then(data => {
            })
            .catch(() => {
              alert("Make sure WhatsApp installed on your device");
            });
        } else {
          alert("Please enter message to send");
        }
      } else {
        alert("Please enter mobile no");
      }
    dispatch(askuser('notasked'))};
  
    return (

       <ScrollView>
      <ViewShot ref = {viewshotref} options={{ format: "jpg", quality: 0.9 }}  snapshotContentContainer = "true">

         {cart.length > 0 && cart !== undefined ? cart.map((product, index) => {
            return <Cartitem key = {product.slug.toString()} item = {product} handledelete = {handledelete} index = {index} />
         }):  
         <Image style = {{width: 300, height: 300, alignSelf: "center"}} resizeMode = "contain" source = {require('../assets/empty.png')} />
   }

          <View
    style={{
      height: wp("40%"),
      width: wp("100%"),
      backgroundColor: "white",
      flexDirection: "column",
      paddingHorizontal: 10,
      paddingVertical: 14,
      marginBottom: 5
    }}
  >
    <View style = {{ padding: 10}}>
      <View style = {{flexDirection: "row", alignItems: "center"}}>
      <Text style = {{fontSize: 20}}>Total : Rs {totalamount} </Text>
      <Text style = {{fontSize: 10}}> + Shipping Charges as per location</Text>

      </View>
      <Text style = {{fontSize: 15, fontWeight: "bold"}}> (Within Assam - Rs 100 for 1kg)</Text>

        <Text style = {{fontSize: 20}}>Number Of Items :- {itemsnumber}</Text>
        </View>
 <Text style = {{fontSize: 12, padding: 10}}>Important Note- Click on Download cart image button or Take Screenshot of this cart and send it to {offers} via whatsapp to place your order, also visit How to Place an Order tab for more details. For any order related queries, feel free to contact us.</Text>
        <Container >
       
        
</Container>


         </View>

         <Button info style = {{ marginTop: 60, padding: 10, borderRadius: 5, alignSelf: "center"}} onPress = {onCapture} >

<Text > Click Here to Download Cart Image</Text>

</Button>

        <View style = {{flexDirection: "row", justifyContent: "space-evenly", margin: 10}} >
        <Button success style= {{ padding: 10, borderRadius: 5}} onPress = {openWhatsApp}>
          <Icon success name= "logo-whatsapp" />
          <Text > Open Whatsapp</Text>
            </Button>
            <Button warning style = {{ padding: 10, borderRadius: 5}} onPress = {handledeleteall}>
            <Icon danger name= "trash" />

          <Text > Clear Cart</Text>
            </Button>
        </View>
      

        <Button  style = {{backgroundColor: 'pink',  padding: 10, borderRadius: 5,marginTop: 30, marginBottom: 30, alignSelf: "center"}} onPress = {onreviewclick}>
            <Icon type = "MaterialIcons" name="shop" />

          <Text style= {{color: 'black', fontSize: 10}} >Please Give us</Text>
          <Text style= {{color: 'black', fontSize: 10}}> a review in playstore. Thank you! </Text>
            </Button>

                   </ViewShot>

       </ScrollView>

    );
}

export default Cartscreen;