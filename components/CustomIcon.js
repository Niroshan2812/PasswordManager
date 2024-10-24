import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomIcon =({name, size =30, color = 'black', onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} style= {style.iconButton}>
            <Icon name ={name} size = {size} color={color}/>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    iconButton:{
        marginHorizontal:10,
    },
});

export default CustomIcon;