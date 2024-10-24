import React, {useState} from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";

import CustomButton from "../components/CustomButton";
import TextInputStyle from "../components/TextInputStyle";
import CustomLable from "../components/CustomLable";

const UpdatePassword =()=>{
    const [nameOfit, setNameofit] = useState("");
    const [enadUser, seteandUser] = useState("");
    const [password, setPassword] = useState("");
  

    return(
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
        title="Save Changers"
        onPress={() => {
          alert("Button pRESS");
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

export default UpdatePassword;