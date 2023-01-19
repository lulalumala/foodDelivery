import { View, FlatList, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"
import { useEffect, useState, useMemo, useContext } from "react"
import Item from "../components/item"
import { data } from "../data"
import { Context } from "../../state"


const HomeScreen = ({ navigation }) => {
    const [fullData, setFullData] = useState( data )
    const [selected, setSelected] = useState('None')
    
    const { category } = useContext(Context)
    const [newCategory, setNewCategory] = category

    // setNewCategory(filteredData)
    // console.log(newCategory)

   const filteredData=useMemo(() => {
        if (selected === 'None') return fullData
        return fullData.filter(item => selected === item.category)
    }, [selected, fullData])

    const setState = (select) => {
        setNewCategory(filteredData)
        setSelected(select)
        console.log(newCategory)
    }

    return (
        <View>
           
            <View style={styles.categories} >
                <TouchableOpacity onPress={() => { setState("starter"); navigation.navigate('Categories') }} >
                    <View style={styles.circle}>
                        <View>
                            <Image style={styles.images} source={require("./../../assets/starter1.jpeg")} />
                        </View>
                        <View>
                            <Text>Starter</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setState("breakfast")} >
                    <View style={styles.circle}>
                        <View>
                            <Image style={styles.images} source={require("./../../assets/breakfast2.jpeg")} />
                        </View>

                        <View>
                            <Text>Breakfast</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setState("main")} >
                    <View style={styles.circle}>
                        <View>
                            <Image style={styles.images} source={require("./../../assets/samakifry.jpeg")} />
                        </View>

                        <View>
                            <Text>Main</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setState("beverage")} >
                    <View style={styles.circle}>
                        <View>
                            <Image style={styles.images} source={require("./../../assets/hiisijuihata.webp")} />
                        </View>
                        <View>
                            <Text>Beverage</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View>

                {/* <FlatList 
                    data={filteredData}
                    renderItem={Item}
                /> */}

            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('AllItems')} >
                    <Text>All Items</Text>
                </TouchableOpacity>
            </View>

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
    },
    images: {
        width: 90,
        height: 80,
        borderRadius: 5
    },
    categories: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    circle: {
        borderRadius: 5,
        backgroundColor: "green",
        alignItems: "center",
        padding: 3
    }
})

export default HomeScreen