
import { View, Text, TouchableOpacity, TextInput , StyleSheet} from "react-native"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; 


const SignUp = ({navigation}) => {
  const [userName, setUserName]=useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirm, setConfirm]=useState(null)
  
  const register = () => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
    // Signed in 
    const user = userCredential.user;
    // ...
    navigation.navigate('Login')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
  }

    return (
      <View style={styles.view}>
        <TextInput placeholder="Username" style={styles.input} onChangeText={(text)=>setUserName(text)} />
        <TextInput placeholder="Email" style={styles.input}  onChangeText={(text)=>setEmail(text)}/>
        <TextInput secureTextEntry={true} style={styles.input}  placeholder="Password" onChangeText={(text) => setPassword(text)} />
        <TextInput secureTextEntry={true} style={styles.input}  placeholder="Confirm Password" onChangeText={(text)=>setConfirm(text)} />

        <TouchableOpacity style={styles.opacity} onPress={register} >
          <Text style={styles.button} >
          Sign Up
          </Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.opacity} onPress={() => {
          navigation.navigate('Login')
        }} >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>  
    )
}

const styles = StyleSheet.create({
  view: {
    padding: 5
  },
  input: {
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 3,
    width: "80%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 2
  },
  button: {
    backgroundColor: "green",
    textAlign: "center",
    fontWeight: "bold",
    color: "yellow",
    fontSize:15,
    padding: 2,
    marginTop: 2    
  },
  opacity: {
    borderStyle: "solid",
    borderRadius:5,
    width: 100,
    textAlign: "center",
    backgroundColor: "green",
    marginTop: 30,
    alignSelf: "center"
  }
})

export default SignUp