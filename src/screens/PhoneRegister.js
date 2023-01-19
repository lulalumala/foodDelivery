import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { auth } from "../../firebase"


const PhoneScreen = () => {
    const [phone, setPhone] = useState(null)
    const [otp, setOtp]=useState(null)

    const confirm = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(phone, {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }, auth);
  }
  
  const verify = () => { 

    const phoneNumber = phone;

    window.recaptchaVerifier = new RecaptchaVerifier(phone, {}, auth);
    const appVerifier = window.recaptchaVerifier;
 
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
        });
  }
  


    return (
        <View>
            <TextInput style={styles.input} placeholder="Phone Number" onChangeText={(text) => setPhone(text)} />
            <TouchableOpacity style={styles.opacity} >
                <Text style={styles.button} onPress={confirm} >Get Code</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Enter received code" onChangeText={(text)=>setOtp(text)}/>
            <TouchableOpacity style={styles.opacity} >
                <Text style={styles.button} >Sign up</Text>
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
      marginBottom: 30,
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
  

export default PhoneScreen