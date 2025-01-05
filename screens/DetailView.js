import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import { getValuefromDB, dropTable } from "../config/db";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const DetailView = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [isPasswordVisible, setPasswordVisible] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getValuefromDB();
      setUserDetails(data);
    };
    fetchData();
  }, []);
  // render each item for help to flatList s
  const renderItem = ({ item }) => {
    return (
      <View style={style.itemContaiiner}>
        <Text style={style.itemText}>Site Name: {item.nameOfit}</Text>
        <Text style={style.itemText}>Catogary: {item.catogary}</Text>
        <Text style={style.itemText}>
          User Email password : {item.enadUser}
        </Text>
        <Text style={style.itemText}>Password: {item.password}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
       {/* Website */}
              <Text style={style.website}>www.twitter.com</Text>
      <View style={style.flatListView}>

        {/* Input Fields */}
      <View style={style.inputGroup}>
        <TextInput style={style.input} editable={false} >Twitter </TextInput>
        <TextInput style={style.input}  editable={false} >Niroshan22</TextInput>
        <View style={style.passwordContainer}>
    <TextInput 
      style={style.passwordInput} 
      editable={false} 
      secureTextEntry={!isPasswordVisible} 
      value="Niroshan982233" 
    />
    <TouchableOpacity 
      style={style.icon} 
      onPress={() => setPasswordVisible(!isPasswordVisible)}
    >
      <Icon 
        name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} 
        size={24} 
        color="gray" 
      />
    </TouchableOpacity>
  </View>
      </View>

        <FlatList
          data={userDetails}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={style.footerButtonContainner}>
       <TouchableOpacity style = {style.btncn}><Text style = {style.bttxt}>Delete</Text></TouchableOpacity>
       <TouchableOpacity style = {style.btncn}><Text style = {style.bttxt}>Update</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContaiiner: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    
    fontSize: 16,
  },
  flatListView: {},
  footerButtonContainner: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignContent: "center",
  },
  website: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop:16,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 32,
    marginLeft:12,
    marginRight:12,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    color:"black"
    
  },
  btncn:{
    backgroundColor:'#007bff',
    padding:12,
    paddingHorizontal:30,
    borderRadius:10
  }, 
  bttxt:{
    color:'#feffff', 
    fontSize:17,
    fontStyle:"normal"
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    color: "black",
  },
  icon: {
    padding: 10,
  },
});
export default DetailView;
