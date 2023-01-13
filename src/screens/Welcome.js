
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      
      <Text style={styles.heading} >WELCOME TO MAMA IDRIS' FOOD DELIVERY APP</Text>
     <Image style={styles.image} source={require("./../../assets/gg.jpg")} />
     
      <TouchableOpacity onPress={() => {
        navigation.navigate("Sign Up")
      } }  style={styles.opacity}> 
        <Text style={styles.button} >NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.opacity}> 
        <Text style={styles.button} onPress={() => {
          navigation.navigate("Home")
        } } >SKIP</Text>
      </TouchableOpacity>
   </View> 
  )
}
const styles = StyleSheet.create({
  opacity: {
    borderStyle: "solid",
    borderRadius:5,
    width: 100,
    textAlign: "center",
    backgroundColor: "green",
    marginTop: 30,
    alignSelf: "center"
  },
  image: {
    width: "100%",
    height: 500
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "green",
    padding: 20
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    color: "yellow",
    fontSize:15,
    padding: 2
  }

})
export default WelcomeScreen