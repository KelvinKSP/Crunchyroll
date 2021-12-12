import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    input: {
        width:300,
        height: 50,
        //Cor dos inputs
        backgroundColor:"#474747",
        marginTop: 20,
        color: "#FFF",
        fontSize: 18,
        textAlign: "center",
        borderColor: "#FF6800",
        borderBottomWidth: 2,
    },
    imgLogo: {
        resizeMode: 'stretch', 
        width: 250, 
        height:50, 
        marginLeft:20 
    },
    textinho: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 11,
        color: "#FFF",
    },
    textoEsqueceuCriar: {
        textAlign: "center",
    },
    btnEntrar: {
        width: 300,
        height: 50,
        borderWidth:2,
        borderColor:"#494949",
        marginTop: 15,
        marginBottom: 50,
    },
    textoBtn: {
        color: "#494949",
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }


});

export default styles