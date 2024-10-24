import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const CustomLable = ({textStyle, title})=>{
    return (
        
            <Text style = {[style.textStyles , textStyle]}>{title}</Text>
        
    )
}
const style = StyleSheet.create({
    textStyles:{
        fontSize:16,
        fontWeight:'bold',
        margin:10, 
        
    }
})

export default CustomLable;