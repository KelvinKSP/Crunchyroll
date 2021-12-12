import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bloco: {
        width: "100%",
        height: 70,
        backgroundColor: "#25465C",
        alignSelf: "center",
        position: "absolute",
        bottom: 0,
    },
    icon: {
        marginTop: 10,
        marginLeft:30,
        marginRight:30,
        flexDirection:"row",       
    },
    text: {
        marginTop: 2,
        flexDirection:"row",
    },
    imgHome: {
        resizeMode:'stretch',
        tintColor:"#FF6800",
        width: 40, 
        height:30,
    },
    imgBandeira: {
        resizeMode:'stretch', 
        tintColor:"#FFF",
        width: 25, 
        height:30,
        marginLeft:35,
    },
    imgMenu: {
        resizeMode:'stretch',
        tintColor:"#FFF" ,
        width: 35, 
        height:30, 
        marginLeft:35,
    },
    imgStar: {
        resizeMode:'stretch', 
        tintColor:"#FFF",
        width: 25, 
        height:30, 
        marginLeft:35,
    },
    imgUser: {
        resizeMode:'stretch', 
        tintColor:"#FFF" ,
        width: 25, 
        height:30,
        marginLeft:35,
    },
    inicio: {
        marginLeft:32,
        fontSize:12, 
        color:"#FF6800",
    },
    listas: {
        marginLeft:30, 
        fontSize:12, 
        color:"#FFF",
    },
    catalogo: {
        marginLeft:20, 
        fontSize:12, 
        color:"#FFF",
    },
    simulcasts: {
        marginLeft:10, 
        fontSize:12, 
        color:"#FFF"
    },
    conta: {
        marginLeft:4, 
        fontSize:12, 
        color:"#FFF",
    },

   

});

export default styles