import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { 
    StyleSheet, 
    View,
    Text
} from "react-native";

export default function Welcome(){
    return(
        <View>
            <Text style={Style.titleWelcome}>Olá, seja bem-vindo ao Me ajuda Zé!</Text>
            
        </View>
    )
}

const Style = StyleSheet.create({
    titleWelcome:{
        backgroundColor:"#ae9280",
        color:"#000",
    }
})