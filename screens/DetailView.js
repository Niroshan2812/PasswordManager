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

const DetailView = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    
      const data = await getValuefromDB();
      setUserDetails(data);
      
    };
    fetchData();
  }, []);

  //For drop table
  const dropdd = () => {
    console.log(userDetails)
  };

  // render each item for help to flatList
  const renderItem = ({ item }) => {
    return(
        <View style={style.itemContaiiner}>
      <Text style={style.itemText}>Site Name: {item.nameOfit}</Text>
      <Text style={style.itemText}>Catogary: {item.catogary}</Text>
      <Text style={style.itemText}>User Email password : {item.enadUser}</Text>
      <Text style={style.itemText}>Password: {item.password}</Text>
    </View>
    );
    
  };
  return (
    <SafeAreaView>
      <Text>Here </Text>


      <FlatList
        data={userDetails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />


      <Button title="drop table" onPress={dropdd} />
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
});
export default DetailView;
