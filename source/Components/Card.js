
import { capitalize } from 'lodash';
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { imageapi } from '../../apiconfig';
import loading from '../../assets/loading.png';
const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 2;
const aspectRatio = 3 / 4;

const Card = ({ productcard, onPress}) => {

    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
    let[productdate,time] = productcard.createdAt.split('T');
    let[pyear ,pmonth, pdate,] = productdate.split('-');
    let [stuff, pryear] = pyear.split('0');
    let newly = false;
    if(pryear===year){
        if(pmonth === month){
            if((date - pdate) <= 15 ){
                newly = true;
            }
        }
    }

	return (
            <TouchableWithoutFeedback
                onPress={onPress}
                style={[styles.container]}
            >
                <View style = {styles.view}>
                <Image  style={styles.image} source = {{uri: `${imageapi}/${productcard.productpictures[0].img}`}} />
 {/* <Image  source = {{uri : `${imageapi}/${productcard.productpictures[0].img}` }}
                        style={[styles.image]}   />  */}
                    <Text style={[styles.brand ]}>{ productcard.name }</Text>
                {newly ? <Text style = {[styles.brand], {color: 'red', fontSize: 9}}>Newly added</Text>: null} 
                    <Text style={[styles.price ]}>{ `\u20B9${productcard.price}/-` }</Text>
                </View>
            </TouchableWithoutFeedback>
	);
};


const styles = StyleSheet.create({
    view: {
        margin: 7
    },
	image: {
		width: rowWidth,
        height: rowWidth / aspectRatio,
        borderColor: '#d5d6d9',
		borderWidth: 0.5,
    },
    container: {
        paddingLeft: itemSpacing,
        backgroundColor: '#ffffff',
    },
    brand: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 14,
        color: '#161925',
        width: rowWidth,
        textTransform: "capitalize",
        fontFamily: "Roboto"
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: '#4a4a4a',
        width: rowWidth,
    },
    desc: {
        marginTop: 5,
        fontWeight: '200',
        marginBottom: 20,
        fontSize: 11,
        color: '#94989f',
        width: rowWidth,
    },
});

export default Card;

