import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, TouchableOpacity, TextInput } from "react-native";

const width = Dimensions.get('screen').width;

export default function NumericKeyboard({ placeholderName }) {
    return <>
     <TextInput
      style={styles.input}
      placeholder={placeholderName}
    />
    </>
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F3F3F3',
        borderWidth: 0,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2, 
        elevation: 5, 
        padding: 30
    },
})


