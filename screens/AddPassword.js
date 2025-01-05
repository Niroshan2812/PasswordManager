import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import TextInputStyle from "../components/TextInputStyle";
import CustomLable from "../components/CustomLable";
import {
  initializeDatabace,
  getCatogaryFromDB,
  insertValueIntoDb,
} from "../config/db";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";

const AddPassword = () => {
  const [nameOfit, setNameofit] = useState("");
  const [catogary, setCatogary] = useState("");
  const [enadUser, seteandUser] = useState("");
  const [password, setPassword] = useState("");
  //For adding catogary in
  const [categories, setcategories] = useState([]);
  const [isAddingNewCatogary, setisAddingNewCatogary] = useState(false);

  useEffect(() => {
    const setUpDatabace = async () => {
      await initializeDatabace();
      await loadCatogaries();
    };
    setUpDatabace();
  }, []);
  //For loading catogaries value
  const loadCatogaries = async () => {
    const categorisFromDB = await getCatogaryFromDB();
    setcategories(categorisFromDB);
  };

  //For create table
  const handleAppPassword = async () => {
    if (!nameOfit || !catogary || !enadUser || !password) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    // Make this encription process passed --> this becouse the error
    await insertValueIntoDb(nameOfit, catogary, enadUser, password);
  };

  return (
    <SafeAreaView style={style.container}>
      {/* Search bar*/}
      <TextInput
        style={style.searchBar}
        placeholder="Search a website or app"
      />

      {/* Quick Links */}
      <View style={style.quickLink}>
        <TouchableOpacity style={style.quickLinkButton}>
          <Text style={style.quickLinkText}>+ Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.quickLinkButtonSelected}>
          <Text style={style.quickLinkTextSelected}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.quickLinkButton}>
          <Text style={style.quickLinkText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.quickLinkButton}>
          <Text style={style.quickLinkText}>Facebook</Text>
        </TouchableOpacity>
      </View>

        {/* Website */}
        <Text style={style.website}>www.twitter.com</Text>

      <View style={style.lableBtnContainner}>
        <CustomLable title={"Name"} />
        <TextInputStyle
          placeholder="  Website/AppName"
          onChangeText={setNameofit}
        />

        <CustomLable title={"Category"} />
        {isAddingNewCatogary ? (
          <TextInput
            style={style.textInput}
            placeholder="Enter new category"
            onChangeText={setCatogary}
          />
        ) : (
          <RNPickerSelect
            onValueChange={(value) => {
              if (value === "new") {
                setisAddingNewCatogary(true);
              } else {
                setCatogary(value);
              }
            }}
            items={[
              ...categories.map((category) => ({
                label: category,
                value: category,
              })),
              { label: "Add New Category", value: "new" },
            ]}
            placeholder={{ label: "Select a category", value: null }}
          />
        )}
        <CustomLable title={"Email / UserName"} />
        <TextInputStyle
          placeholder="  Email/userName"
          onChangeText={seteandUser}
        />

        <CustomLable title={"Password"} />
        <TextInputStyle placeholder="  Password" onChangeText={setPassword} />

        <CustomButton title="Add Password" style = {style.buttonhandler} onPress={handleAppPassword} />
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
  searchBar: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: "8%",
    marginTop: "5%",
    marginRight: "8%",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  quickLink: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  quickLinkButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  quickLinkText: {
    color: "#555",
  },
  quickLinkButtonSelected: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },
  quickLinkTextSelected: {
    color: "#fff",
  },
  website: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonhandler:{
    flexDirection:"row", 
    justifyContent:"space-between", 
    alignItems:"center"
  }
});
export default AddPassword;
