import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bloco: {
        width: "100%",
        height: 70,
        backgroundColor: "#000",
        display: "flex",
    },
    imgLogo: {
        resizeMode: 'stretch', 
        width: 155, 
        height:30, marginLeft:20, 
        marginTop:20,
    },
    lupa: {
        resizeMode:'stretch',
        width: 44, 
        height:40, 
        position:"absolute", 
        alignSelf:"flex-end", 
        marginTop:20,
    }
    

});

export default styles