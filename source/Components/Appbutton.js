import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function Appbutton({title, onPress, color, height = 50, borderRadius = 40, fontSize = 30, fontcolor = "black"}) {
    return (
      <TouchableOpacity style = {{ ...styles.button, backgroundColor: color, borderRadius: borderRadius, height: height}}   onPress = {onPress}>
          <Text style = {{ color: fontcolor, fontSize: fontSize, fontWeight: "bold"}}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },

})
export default Appbutton;