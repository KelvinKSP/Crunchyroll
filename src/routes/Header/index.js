import React from "react";
import { Text, View, Image, StatusBar  } from "react-native";
import styles from "./style";

export default function BarraHeader() {
    return (
        <View style={styles.bloco}>
                <StatusBar />
                <Image 
                    style={styles.imgLogo}
                    source={require('../../img/logo.png')} 
                />
                <Image 
                    style={styles.lupa}
                    source={require('../../img/lupa.png')} 
                />
                <Text>.</Text>
              
        </View>
    )
}