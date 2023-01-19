import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { data } from "../data";

const AllItems = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.main} >
              
                {data.map(item => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Single', {id: item.id, img: item.img, price: item.price, names: item.names})}>
                            <View style={{ height: 90 }} >
                                <Image source={item.img} style={styles.image} />
                                <Text>{item.names} </Text>
                                <Text>{item.price} </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}



            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "80%"
    },
    box: {
        width: 80
    },
    main: {
        flexDirection: "row",
        gap:10,
        flexWrap: "wrap"
    }
})

export default AllItems