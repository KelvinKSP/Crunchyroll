import React from "react"
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native"
import styles from "./style";

export default function Login ({navigation}) {

    return (
        <View style={styles.container}>
            <View>  
                {/* LOGO CRUNCHYROLL */}
                <Image
                    style={styles.imgLogo}
                    source={require('../../img/logo.png')}
                />   
                {/* INPUT - E-MAIL OU USUARIO */}
                <TextInput
                    style={styles.input} 
                    placeholder="E-mail ou Nome Usuário"
                    placeholderTextColor="#FFF" 
                   
                />
                {/* INPUT - SENHA */}
                <TextInput 
                    style={styles.input} 
                    placeholder="Senha"
                    placeholderTextColor="#FFF" 
                    secureTextEntry={true}
                />
            </View>
            <View>
                {/* TERMOS */}
                <Text style={styles.textinho}>
                    Ao entrar com sua conta, você declara possuir mais {"\n"}
                    de 16 anos e estar de acordo com nossos  {"\n"}
                    <Text style={{color: "#FF6800"}}>Termos e Condições</Text> e nossa <Text style={{color: "#FF6800"}}>Política de Privacidade</Text>. 
                </Text>
            </View>
            <View>
                {/* BOTÃO DE ENTRAR */}
                <TouchableOpacity 
                    style={styles.btnEntrar} 
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textoBtn}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* ESQUECEU SENHA OU CRIAR */}
                <Text style={styles.textoEsqueceuCriar}>
                    <Text style={{color: "#FF6800"}}> Esqueceu a Senha? </Text> <Text style={{color: "#FFF"}}>|</Text> <Text style={{color: "#FF6800"}}> Criar Conta </Text>
                </Text>
            </View>
        </View>

    )
}