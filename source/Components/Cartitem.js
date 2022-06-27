import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { addproducttocart } from '../../actions/dashboard/productactions';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { imageapi } from '../../apiconfig';


function Cartitem(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.productlist.cart);

    const {item, index} = props;
    const [qty, setqty] = useState(cart[index].quantity);

    useEffect(() => {
        setqty(cart[props.index].quantity)
    }, [cart])

    const ondecrease = (product) => {
        if(product.product.quantity >= qty && qty !==1){
            setqty(qty - 1);
            onchangehandler(product, qty-1)
        }
       


    }

    const onchangehandler = (product, e) => {
        dispatch(addproducttocart(product, e, undefined));
    }

    const onincrease = (product) => {
        if(product.product.quantity > qty){
            setqty(qty + 1);
            onchangehandler(product, qty+1)
        }
       

    }
    const uri = `${imageapi}/${item.product.productpictures[0].img}`;
    return   <View
    style={{
      height: wp("35%"),
      width: wp("100%"),
      backgroundColor: "white",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 14,
      marginBottom: 5
    }}
  >
    <View
      style={{
        width: wp("26%"),
        height: wp("26%"),
        marginRight: 10
      }}
    >
      <Image
source = {{uri}}      style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: "contain"
        }}
      />
    </View>
  
    <View
      style={{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "space-around"
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "capitalize"
          }}
        >
     {item.product.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
        
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: wp("2.5%"),
              height: wp("5%"),
              marginRight: 5
            }}
          />
        <Text>Per Piece - Rs {item.price}</Text>

        </View>
{ item.product.quantity === 1 ?      <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: wp("30%"),
              height: wp("10%"),
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: 8
            }}
          >
            <Text>Quantity - 1</Text>
            
            </View>
            <TouchableOpacity style= {{padding: 5, marginLeft: 5}} onPress={() => props.handledelete(item)}>
            <FAIcon name="trash-o" size={30} color="black" />
          </TouchableOpacity>
            </View> :  <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: wp("30%"),
              height: wp("10%"),
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: 8
            }}
          >
            {item.product.quantity === item.quantity ? <TouchableOpacity style= {{backgroundColor: "white"}} onPress={() => onincrease(item)}>
<AntDesign name="plus" size={21} color="red"  style= {{margin: 5}}/>

          </TouchableOpacity>:     <TouchableOpacity style= {{backgroundColor: "white"}} onPress={() => onincrease(item)}>
<AntDesign name="plus" size={21} color="black"  style= {{margin: 5}}/>

          </TouchableOpacity>

            }
       

            <Text style= {{margin: 5}}>{item.quantity}</Text>
            <TouchableOpacity style= {{backgroundColor: "white"}} onPress={() => ondecrease(item)}>
            <AntDesign name="minus" size={21} color="black"  style= {{margin: 5}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style= {{padding: 5, marginLeft: 5}} onPress={() => props.handledelete(item)}>
            <FAIcon name="trash-o" size={30} color="black" />
          </TouchableOpacity>
        </View>

       } 
         </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 10
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold"
          }}
        >
Rs {item.price * item.quantity}
         </Text>
      </View>
    </View>
  </View>
    
}

const styles = StyleSheet.create({
    cartitem: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    
    image: {
        width: "30%",
        height: 100,
        borderRadius: 15
    },
    name: {
        fontSize: 10
    }
})

export default Cartitem;