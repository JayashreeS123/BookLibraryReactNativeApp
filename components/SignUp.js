import { Text, View, StyleSheet, TextInput , TouchableOpacity} from "react-native";

function SignUp({navigation}){
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25, color:"#00ffb7"}}>Register</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Phone Number</Text>
                <TextInput  style={styles.textField} placeholder={'Enter phone number'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Re-type Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password again'}/>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>Create Account</Text>   
            </TouchableOpacity>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#294603',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#00ffb7',
        borderRadius:10,
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10,
    }
})