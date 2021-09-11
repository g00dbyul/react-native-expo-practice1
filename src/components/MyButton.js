import React from "react";
import {Pressable, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function MyButton(props) {
    return (
        <Pressable style={style.press} onPress={()=> props.onPress()}>
            <Text style={style.text}>{props.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    press : {
      backgroundColor: '#34dbc8',
      padding : 16,
      margin : 10,
      borderRadius: 8
    },
    text : {
        color : 'ivory',
        fontSize : 24
    }
})
