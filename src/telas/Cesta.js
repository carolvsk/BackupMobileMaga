import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, TouchableOpacity, TextInput } from "react-native";


const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <View style = {estilos.container}>
            <Image source={require("../../assets/topo.png")} style={estilos.topo} resizeMode="contain"/>
            <Text style={estilos.titulo}>Um código foi enviado no número fornecido</Text> 
            <Text style={estilos.nome}>Para confirmar seu número insira-o abaixo </Text>
            <View style={{ flexDirection: 'row' }}></View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput
                 placeholder="DIGITE AQUI O CÓDIGO" 
                 style={{
                        backgroundColor: '#F3F3F3',
                        borderWidth: 0,
                        borderRadius: 10,
                        shadowColor: '#000000',
                        shadowOpacity: 1,
                        shadowRadius: 2, 
                        elevation: 5, 
                        padding: 30
                    }} 
                 keyboardType="number-pad"
                 />
        </View>
        </View>
    </>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
    },
    titulo: {
        width: "100%",
      // position: "absolute",
        textAlign: "center",
        fontSize: 19,
        lineHeight: 26,
        color: "#666666",
        fontWeight: "bold",
        padding: 16,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 82
    },
    nome:{
        color: "#979797",
        fontSize: 16,
        lineHeight: 20,
      //  fontWeight: "bold",
        textAlign: "center",
    }

});