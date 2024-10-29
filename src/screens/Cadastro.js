import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View

} from "react-native";

import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";




export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');





    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.cadastroTitle}>FAÇA SEU CADASTO</Text>
            <View style={styles.containerCadastro}>
                <Text style={inputLabel}>Nome Completo</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={nome}
                    onChangeText={newNome => setNome(newNome)}
                    placeholder="Digite seu nome"
                    autoCorrect={false}


                />

                <Text style={inputLabel}>Telefone</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={telefone}
                    onChangeText={newTelefone => setTelefone(newTelefone)}
                    placeholder="Digite seu telefone com ddd"
                    autoCorrect={false}


                />

                <Text style={inputLabel}>E-mail</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={email}
                    onChangeText={newEmail => setEmail(newEmail)}
                    placeholder="Digite seu e-mail"
                    autoCorrect={false}


                />

                <Text style={inputLabel}>Crie uma Senha</Text>
                <TextInput
                    style={styles.cadastroInput}
                    value={senha}
                    onChangeText={newSenha => setSenha(newSenha)}
                    placeholder="Digite seu telefone com ddd"
                    autoCorrect={false}
                    secureTextEntry={true}


                />

                <Text style={inputLabel}>Confirme sua senha</Text>
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
    )
}

const styles = StyleSheet.create({

})