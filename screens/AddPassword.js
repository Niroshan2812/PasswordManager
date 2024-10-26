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
import { initializeDatabace, dropTable, insertValueIntoDb } from "../config/db";

const AddPassword = () => {
  const [nameOfit, setNameofit] = useState("");
  const [catogary, setCatogary] = useState("");
  const [enadUser, seteandUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect (()=>{
    const setUpDatabace = async ()=>{
      await initializeDatabace();

    };
    setUpDatabace();
  },[])

  //For create table
  const handleAppPassword = () => {
    if (!nameOfit || !catogary || !enadUser || !password) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    // Make this encription process passed --> this becouse the error
    insertValueIntoDb(nameOfit,catogary,enadUser,password);
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
        <TextInputStyle placeholder="  Catogary" onChangeText={setCatogary} />

        <CustomLable title={"Email / UserName"} />
        <TextInputStyle
          placeholder="  Email/userName"
          onChangeText={seteandUser}
        />

        <CustomLable title={"Password"} />
        <TextInputStyle placeholder="  Password" onChangeText={setPassword} />

        <CustomButton title="Add Password" onPress={handleAppPassword} />
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
