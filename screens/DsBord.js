import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../components/CustomIcon";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/Ionicons";

const DsBord = () => {
  const navigation = useNavigation();
  const [dashbrdData, setDashbrdData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const mockData = [
        { id: "1", email: "user1@example.com", username: "user1" },
        { id: "2", email: "user2@example.com", username: "user2" },
        { id: "3", email: "user3@example.com", username: "user3" },
      ];
      setDashbrdData(mockData);
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={style.container}>
      {/* Top Header */}

      <View style={style.topHeader}>
        <View style={style.topSubHeader}>
          <View style={style.avetarContainner}>
            <Image
              style={style.avetar}
              source={{
                uri: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
              }}
            />
          </View>
          <Text style={style.greeting}> Hello, Niroshan</Text>
        </View>
        <Icon name="notifications-outline" size={24} color="gray" />
      </View>
      {/* Top Header */}
      <View style={style.searchContainer}>
        <View style={style.searchBar}>
          <Icon name="search" size={20} color="gray" />
          <TextInput placeholder="Search Password" style={style.searchInput} />
        </View>
      </View>

      {/* Categories */}
      <Text style={style.sectionTitle}>Category</Text>
      <View style={style.categoryContainer}>
        <TouchableOpacity style={style.categoryItem}>
          <View style={[style.categoryIcon, { backgroundColor: '#DBEAFE' }]}>
            <Icon name="key-outline" size={28} color="#1D4ED8" />
          </View>
          <Text style={style.categoryText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.categoryItem}>
          <View style={[style.categoryIcon, { backgroundColor: '#D1FAE5' }]}>
            <Icon name="globe-outline" size={28} color="#16A34A" />
          </View>
          <Text style={style.categoryText}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.categoryItem}>
          <View style={[style.categoryIcon, { backgroundColor: '#FCE7F3' }]}>
            <Icon name="card-outline" size={28} color="#DB2777" />
          </View>
          <Text style={style.categoryText}>Card</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Used */}
      <Text style={style.sectionTitle}>Recent Used</Text>
      <ScrollView style={style.recentContainer}>
        {[
          { name: 'Google Account', email: 'rahulornob@gmail.com', icon: 'logo-google' },
          { name: 'Twitter', email: 'rahulornob', icon: 'logo-twitter' },
          { name: 'Dribbble Pro', email: 'rahulornob@gmail.com', icon: 'basketball-outline' },
          { name: 'Google Account', email: 'rahulornob@gmail.com', icon: 'logo-google' },
          { name: 'Twitter', email: 'rahulornob', icon: 'logo-twitter' },
          { name: 'Dribbble Pro', email: 'rahulornob@gmail.com', icon: 'basketball-outline' },
          { name: 'Google Account', email: 'rahulornob@gmail.com', icon: 'logo-google' },
          { name: 'Twitter', email: 'rahulornob', icon: 'logo-twitter' },
          { name: 'Dribbble Pro', email: 'rahulornob@gmail.com', icon: 'basketball-outline' },
  
        ].map((item, index) => (
          <View key={index} style={style.recentItem}>
            <View style={style.recentDetails}>
              <Icon name={item.icon} size={30} color="gray" />
              <View style={style.recentText}>
                <Text style={style.recentTitle}>{item.name}</Text>
                <Text style={style.recentEmail}>{item.email}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon name="copy-outline" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={style.bottomNav}>
      <CustomIcon
          name="plus"
          style={style.addicon}
          size={24}
          color="#000"
          onPress={() => {
            navigation.navigate("AddPassword");
          }}
        />
      </View>

     
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'hsl(234, 57.10%, 67.10%)',
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingTop: "5%",
  },
  topSubHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avetarContainner: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avetar: {
    width: "90%",
    height: "90%",
    borderRadius: 50,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: "#6B7280",
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: '#374151',
  },

  recentContainer: {
    paddingHorizontal: 20,
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  recentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentText: {
    marginLeft: 10,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  recentEmail: {
    fontSize: 12,
    color: '#6B7280',
  },

  
  flatListStyle: {
    marginTop: "5%",
  },
  bottomNav: {
   
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    opacity: 0.6,
    borderTopWidth: 0.5,
    borderTopColor: '#E5E7EB',
  },
  addicon:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  }
});
export default DsBord;
