import React, { useState } from "react";
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


const AddPassword = () => {
  const [nameOfit, setNameofit] = useState("");
  const [catogary, setCatogary] = useState("");
  const [enadUser, seteandUser] = useState("");
  const [password, setPassword] = useState("");




  return (
    <SafeAreaView style={style.container}>
      <View style={style.lableBtnContainner}>
        <CustomLable title={"Name"} />
        <TextInputStyle
          placeholder="Website/AppName"
          onChangeText={setNameofit}
        />

<CustomLable title={"Catogary"} />
        <TextInputStyle
          placeholder="Website/AppName"
          onChangeText={setNameofit}
        />

<CustomLable title={"Email / UserName"} />
        <TextInputStyle
          placeholder="Website/AppName"
          onChangeText={seteandUser}
        />

<CustomLable title={"Password"} />
        <TextInputStyle
          placeholder="Website/AppName"
          onChangeText={setPassword}
        />

        <CustomButton
        title="Add Password"
        onPress={() => {
         alert("Predd")
        }}
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
    justifyContent:'center',
    margin:30,
    shadowOpacity:10,
  },
});
export default AddPassword;
