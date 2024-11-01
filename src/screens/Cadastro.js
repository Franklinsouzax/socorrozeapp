import React from "react";
<<<<<<< HEAD
import { StyleSheet,Text,View} from "react-native";

export default function Cadastro(){
    return(
        <View>


            
        </View>
    )
}

const Styles = StyleSheet.create({
=======
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput

} from "react-native";

import { useState } from "react";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";




export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');





    return (
        <GestureHandlerRootView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.cadastroTitle}>FAÇA SEU CADASTO</Text>
            <View style={styles.containerCadastro}>
                <Text style={styles.inputLabel}>Nome Completo</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={nome}
                    onChangeText={newNome => setNome(newNome)}
                    placeholder="Digite seu nome"
                    autoCorrect={false}


                />

                <Text style={styles.inputLabel}>Telefone</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={telefone}
                    onChangeText={newTelefone => setTelefone(newTelefone)}
                    placeholder="Digite seu telefone com ddd"
                    autoCorrect={false}


                />

                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={email}
                    onChangeText={newEmail => setEmail(newEmail)}
                    placeholder="Digite seu e-mail"
                    autoCorrect={false}


                />

                <Text style={styles.inputLabel}>Crie uma Senha</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={senha}
                    onChangeText={newSenha => setSenha(newSenha)}
                    placeholder="Digite seu telefone com ddd"
                    autoCorrect={false}
                    secureTextEntry={true}


                />

                <Text style={styles.inputLabel}>Confirme sua senha</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={telefone}
                    onChangeText={newTelefone => setTelefone(newTelefone)}
                    placeholder="Digite seu telefone com ddd"
                    autoCorrect={false}
                    secureTextEntry={true}
                />

                <TouchableOpacity>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
                
            </View>

        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
>>>>>>> fdaae181d953769bc355bece4dee6ffa49fcc3be

})