import { View, Text , Image, StyleSheet} from "react-native"


const SingleItem = ({navigation, route}) => {
    const { id, names, img, price } = route.params
    
    return (
        <View>
            <Image source={img} style={{width: "100%"}} />
            <Text style={styles.text} > {names} </Text>
            <Text>{price} </Text>

        </View>
    )
    
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 40

    }
})

export default SingleItem