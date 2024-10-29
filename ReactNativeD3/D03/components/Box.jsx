import React from 'react';
import { StyleSheet, View ,Text } from 'react-native';

const Box = ({colorName, hexCode}) => {
    return (
        <View style={[styles.box,{backgroundColor:hexCode}]}>
        <Text style={styles.text}> {colorName} {hexCode}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    box: {
        
        marginBottom: 15,
        backgroundColor: "#2aa198",
        marginHorizontal: 10,
        borderRadius: 7,
      },
      text: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
      },
})

export default Box;
