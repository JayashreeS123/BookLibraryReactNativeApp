import { View, Text, StyleSheet,Button, TouchableOpacity, Image } from "react-native";
// import { Button } from "react-native-elements/dist/buttons/Button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function FirstPage({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../src/download.jpeg')}/>
            <Text style={{color:"black", fontSize:20, fontWeight:"bold",}}>Welcome to</Text>
            <Text style={{color:"black", fontSize:24, fontWeight:"bold",}}>Book Library</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
            {/* <Button title="Login"/> */}
            {/* <Button
        onPress={() => navigation.navigate('SignUp')}
        title="Login"
      />
            <Button title="Register"/> */}
        </View>
    )
}

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:15,
        backgroundColor: '#00ffb7',
        justifyContent:'center',
        alignItems: 'center',
    },
    image:{
        width:400,
        height:300,
        // left:'47px', 
        // top:'53px', 
        // position:"absolute", 
        borderRadius:50
    },
    btn : {
        marginTop: 40,
        padding:0,
        backgroundColor:'#294603',
        width:"41%",
        alignItems: "center",
        borderRadius:30,
    },
    btnText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        padding:4,
    }
})

