import React from "react";
import {TextInput, StyleSheet} from "react-native";

const TextInputStyle =({ textInputStyle})=>{
 return(
    
        <TextInput style = {[style.TextInput,textInputStyle]}/>
    
 )
}
const style = StyleSheet.create({
    TextInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10
        
    }
})
export default TextInputStyle;