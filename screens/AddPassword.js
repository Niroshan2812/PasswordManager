import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import TextInputStyle from "../components/TextInputStyle";
import CustomLable from "../components/CustomLable";
import * as CryptoJs from "expo-crypto";
import { createTables, initilizedb, insertPassword } from "../config/db";

const AddPassword = () => {
  const [nameOfit, setNameofit] = useState("");
  const [catogary, setCatogary] = useState("");
  const [enadUser, seteandUser] = useState("");
  const [password, setPassword] = useState("");

  //For create table
  useEffect(() => {
    initilizedb();
  }, []);


  //Function for saving data
  const handleAppPassword = async() => {

    console.log(nameOfit,catogary,enadUser,password)
    
    if (!nameOfit || !catogary || !enadUser || !password) {
      Alert.alert("Error", "All field need to be filed ");
      return;
    }
    const encriptPssword = await CryptoJs.digestStringAsync(
      CryptoJs.CryptoDigestAlgorithm.SHA256,
      password
    );

    insertPassword(nameOfit, catogary, enadUser, encriptPssword);
    Alert.alert("Success", "Password saved");

    //clear After Saved
    setNameofit("");
    setCatogary("");
    seteandUser("");
    setPassword("");
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.lableBtnContainner}>
        <CustomLable title={"Name"} />
        <TextInputStyle
          placeholder="  Website/AppName"
          onChangeText={setNameofit}
          
        />

        <CustomLable title={"Catogary"} />
        <TextInputStyle
          placeholder="  Catogary"
          onChangeText={setCatogary}
        />

        <CustomLable title={"Email / UserName"} />
        <TextInputStyle
          placeholder="  Email/userName"
          onChangeText={seteandUser}
        />

        <CustomLable title={"Password"} />
        <TextInputStyle
          placeholder="  Password"
          onChangeText={setPassword}
        />

        <CustomButton
          title="Add Password"
          onPress={handleAppPassword}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  lableBtnContainner: {
    justifyContent: "center",
    margin: 30,
    shadowOpacity: 10,
  },
});
export default AddPassword;
