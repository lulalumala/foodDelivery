import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword]=useState(null)


  const logIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigation.navigate('Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

  return (
    <View>

      <Text>Login to view more</Text>

      <TextInput style={styles.input} placeholder="EMAIL" onChangeText={(text)=>setEmail(text)}/>
      <TextInput style={styles.input} placeholder="PASSWORD" onChangeText={(text)=>setPassword(text)}/>
      
      
      <TouchableOpacity style={styles.opacity} onPress={() => {
        navigation.navigate('Sign Up')
      }}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.opacity} onPress={logIn} >
      <Text style={styles.button}>Login</Text>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.opacity} onPress={() => {
        navigation.navigate("Home")
      } 

      } >
        <Text style={styles.button} >Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 3,
    alignSelf: "center",
    width: "80%",
    borderRadius: 5,
    margin: 2
  },
  opacity: {
    borderStyle: "solid",
    borderRadius:5,
    width: 100,
    textAlign: "center",
    backgroundColor: "green",
    marginTop: 30,
    alignSelf: "center"
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    color: "yellow",
    fontSize:15,
    padding: 2
  }
})
export default LoginScreen