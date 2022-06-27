import React from 'react';
import { View, StyleSheet, Image , Text} from 'react-native';

function Lister({image, title, subtitle}) {
    return (
      <View style = {styles.container}>
          <Image source = {image} style = {styles.image}/>
          <View>
              <Text style= {styles.title}>
                  {title}
              </Text>
              <Text style = {{color: "black", fontFamily: "Encode",textTransform: 'none'}} >assamtextiles.com</Text>

              <Text  style= {styles.subtitle}>
                  {subtitle}
              </Text>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 50,
        
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,  
        marginRight: 10
    },
    title: {
        color: "black",
        fontWeight: "bold"
    },
    subtitle: {
        color: "grey",
    }
})
export default Lister;