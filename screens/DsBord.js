import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../components/CustomIcon";
import Card from "../components/Card";

const DsBord = () => {
  const navigation = useNavigation();

  

  return (
    <SafeAreaView style={style.container}>
      <View style = {style.topHeader}>
        <Text >Dashboard</Text>
      </View>
      <View style={style.header}>
        <Text>Implement card</Text>
        <Button onPress={()=>{navigation.navigate('DetailView')}}title="For navigate Detail View "/>
          {/* Render the Card component */}
        <Card
          title="Card Title"
          description="This is a description of the card."
          onPress={() => navigation.navigate('DetailView')}
        />
      </View>


      <View style={style.secHeader}>
        <CustomIcon name="plus" size={24} color="#000" onPress={()=>{navigation.navigate('AddPassword')}}/>

      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#c2aad5'
  },
  topHeader: {
    flex:2,
    backgroundColor:'#b98eda',
    
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
