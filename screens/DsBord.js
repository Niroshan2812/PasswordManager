import React from "react";
import {View, Text, Button, StyleSheet,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const  DsBord = ()=>{
    const navigation = useNavigation();
    return(

    <SafeAreaView style = {style.container}>
        <Text> Main View </Text>
        <Button title="Nav" onPress={()=> navigation.navigate('AddPassword')}/>
    </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
    }
})
export default DsBord;
