import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import { getValuefromDB, dropTable } from "../config/db";
import CustomButton from "../components/CustomButton";

const DetailView = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getValuefromDB();
      setUserDetails(data);
    };
    fetchData();
  }, []);
  // render each item for help to flatList
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
      <View style = {style.flatListView}>
      <FlatList
        data={userDetails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      </View>
      <View style = {style.footerButtonContainner}>
        <CustomButton title={"Delete"}/>
        <CustomButton title={"Upgrade"}/>
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
  },flatListView:{
    
  },
  footerButtonContainner:{
    
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignContent:'center'
  }
});
export default DetailView;
