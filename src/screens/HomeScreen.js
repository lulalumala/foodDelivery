import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from "react-native"

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground style={styles.image} source={{ uri: "https://images.unsplash.com/photo-1533920606431-81cd9c3bce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} >


                <Text style={styles.text} >ITAFIKA IKIWA MOTO MOTO</Text>
                <TouchableOpacity style={styles.opacity} onPress={() => {
                    navigation.navigate('Login')
                }} >
                    <Text style={styles.login} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacity} onPress={() => {
                    navigation.navigate('Login')
                }} >
                    <Text style={styles.login} >Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.opacity} onPress={() => {
                    navigation.navigate('Phone')
                }} >
                    <Text style={styles.login}  >Categories</Text>
                </TouchableOpacity>
                <TextInput style={styles.textinput} placeholder="Search" />
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    text: {
        color: "green",
        textAlign: "center",
        fontSize: 25,
        padding: 5,
        fontWeight: "bold"
    },
    login: {
        color: "green",
        padding: 2,
        textAlign: "center"
    },
    opacity: {
        borderColor: "green",
        borderStyle: "solid",
        borderWidth: 2,
        width: 90
    },
    textinput: {
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 10,
        borderColor: "green",
        width: "90%",
        color: "aqua"
    }
})

export default HomeScreen