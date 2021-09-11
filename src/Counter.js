import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native"
import MyButton from "./components/MyButton";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <View style={style.view}>
            <Text style={style.text}>{count}</Text>
            <MyButton title = "+" onPress = {() => setCount(count+1)}/>
            <MyButton title = "-" onPress = {() => setCount(count-1)}/>
        </View>
    )
}

const style = StyleSheet.create({
    view : {alignItems : 'center'},
    text : {fontSize : 30, margin: 10}
})

