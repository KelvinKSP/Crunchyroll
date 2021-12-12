import React from "react";
import { Text, View, Image, StatusBar  } from "react-native";
import styles from "./style";

export default function BarraFooter() {
    return (
        <View style={styles.bloco}>
                    <View style={styles.icon}>
                        <Image 
                            style={styles.imgHome}
                            source={require('../../img/icons-footer/home.png')} 
                        />                     
                        <Image 
                            style={styles.imgBandeira}
                            source={require('../../img/icons-footer/bandeira.png')} 
                        />
                        <Image 
                            style={styles.imgMenu}
                            source={require('../../img/icons-footer/menu.png')} 
                        />
                         <Image 
                            style={styles.imgStar}
                            source={require('../../img/icons-footer/star.png')} 
                        />
                         <Image 
                            style={styles.imgUser}
                            source={require('../../img/icons-footer/user.png')} 
                        />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.inicio}>
                            Inicio
                        </Text>
                        <Text style={styles.listas}>
                            Listas
                        </Text>
                        <Text style={styles.catalogo}>
                            Catálogo
                        </Text>
                        <Text style={styles.simulcasts}>
                            Simulcasts
                        </Text>
                        <Text style={styles.conta}>
                            Conta
                        </Text>              
                    </View>         
        </View>
    )
}

