import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../components/CustomIcon";


const DsBord = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text> Main View </Text>
        <Button
          title="Nav"
          onPress={() => navigation.navigate("AddPassword")}
        />
        <Text>Seconf </Text>
      </View>


      <View style={style.secHeader}>
        <CustomIcon name="pluscircleo" size={24} color="#000" onPress={()=>alert("Home press")}/>

      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 8,
  },
  secHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default DsBord;
