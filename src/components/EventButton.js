import React, {useCallback, useState} from "react";
import {Pressable, Text, StyleSheet, View} from "react-native";
import Toast from "react-native-easy-toast"

const EventButton = () => {
    const [toast, setToast] = useState();

    const pressIn = useCallback(()=> {
        toast.show('Press In!!',1000);
    })

    const press = useCallback(()=> {
        toast.show('Press!!',1000);
    })

    const pressOut = useCallback(()=> {
        toast.show('Press Out!!',1000);
    })

    const pressLong = useCallback(()=> {
        toast.show('Press Long!!',1000);
    })


    return (
        <View>
            <Pressable style={style.button} onPress={press}>
                <Text style={style.text}>Press</Text>
            </Pressable>

            <Pressable style={style.button} onPressIn={pressIn}>
                <Text style={style.text}>Press In</Text>
            </Pressable>

            <Pressable style={style.button} onPressOut={pressOut}>
                <Text style={style.text}>Press Out</Text>
            </Pressable>

            <Pressable style={style.button} onLongPress={pressLong}>
                <Text style={style.text}>Press Long</Text>
            </Pressable>
            <Toast style={style.toast} position="top" ref={(toast) => setToast(toast)} />
        </View>

    )
}

const style = StyleSheet.create({
    button : {
        backgroundColor : '#f1c',
        padding : 16,
        margin : 10,
        borderRadius : 8
    },
    text : {
        color : 'white',
        fontSize : 24
    },
    toast : {
        backgroundColor: '#52c41a',
    }

})

export default EventButton;