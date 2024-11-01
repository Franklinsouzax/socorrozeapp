import React from "react";
import { 
    StyleSheet, 
    SafeAreaView,
    Text,
    View,
    TouchableOpacity 
} from "react-native";

export default function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleWelcome}>Olá, seja bem-vindo ao Socorro Zé!</Text>
            <TouchableOpacity style={styles.buttonInicio}>
                <Text style={styles.buttonInicioText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.buttonPrivacidade}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonPrivacidadeText}>políticas de Privacidade</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleWelcome: {
      
        color: "#000",
        marginTop:40,
        marginBottom:40,
        fontSize:26 ,
        textAlign:"center",
    },
    buttonInicio: {
        backgroundColor: "#b3b3b3",
        width:200,
       color:"#0000",
       fontSize:"24",
       paddingHorizontal:"2",
       paddingVertical:"3",
       alignItems:"center",
       justifyContent:"center",
       marginBottom:20,
       borderRadius:12,
    },
    buttonInicioText:{
        fontSize:20,
    }
});
