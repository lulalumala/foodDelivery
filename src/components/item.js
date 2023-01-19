import react from "react"
import { View , Text} from "react-native"

const Item = (props) => {
    return (
        <View>
            <Text> { props.item.names}</Text>
        </View>
    )
}
export default Item