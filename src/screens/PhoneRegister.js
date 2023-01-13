import { View, Text, TextInput, TouchableOpacity } from "react-native"

const PhoneScreen = () => {
    return (
        <View>
            <TextInput placeholder="Phone Number"/>
            <TouchableOpacity >
                <Text>Sign up</Text>
</TouchableOpacity>

        </View>
    )
}
export default PhoneScreen