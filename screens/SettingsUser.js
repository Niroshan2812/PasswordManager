import React from "react";
import { View, Text, StyleSheet, Image , Switch, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import avetar from "../assets/avt.png";
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsUser = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <View style={Style.avetarContainner}>
        <Image style={Style.avetar} source={avetar} />
        <Text style={Style.profileName}>Niroshan Dharmasiri</Text>
        <Text style={Style.email}>niroshan9812@gmail.com</Text>
      </View>

      <View style={Style.switchContainer}>
        <Text style={Style.switchLabel}>Auto fill pass</Text>
        <Switch
          trackColor={{ false: "#E5E7EB", true: "#3B82F6" }}
          thumbColor={isEnabled ? "#FFFFFF" : "#9CA3AF"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </View>

        {/* Options List */}
        <View style={Style.optionsContainer}>
        {[
          { label: 'Share', icon: 'share-social-outline' },
          { label: 'Export & Import', icon: 'folder-outline' },
          { label: 'Change password', icon: 'lock-closed-outline' },
          { label: 'Send feedback', icon: 'chatbubble-ellipses-outline' },
          { label: 'Help', icon: 'help-circle-outline' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={Style.optionItem}>
            <View style={Style.optionLeft}>
              <Icon name={item.icon} size={24} color="#6B7280" />
              <Text style={Style.optionLabel}>{item.label}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  );
};
const Style = StyleSheet.create({
  avetarContainner: {
    alignItems: "center",
    marginVertical: 30,
  },
  avetar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "#E5E7EB",
    borderWidth: 3,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  email: {
    fontSize: 14,
    marginBottom:6,
    color: '#6B7280',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  optionsContainer: {
    marginHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#374151',
  },

});

export default SettingsUser;
