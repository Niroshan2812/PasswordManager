import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Screens 
import Dsbord from "../screens/DsBord";
import AddPassword from "../screens/AddPassword";
import SettingsUser from "../screens/SettingsUser";
import UpdatePassword from "../screens/UpdatePssword";
import DetailView from "../screens/DetailView";

const Stack = createStackNavigator();

function AppStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Dashboard" component={Dsbord} options={{headerShown:false}} />
            <Stack.Screen name ="AddPassword" component={AddPassword}/>
            <Stack.Screen name  = "SettingUser" component ={SettingsUser}/>
            <Stack.Screen name = "UpdatePassword" component ={UpdatePassword}/>
            <Stack.Screen name ="DetailView" component={DetailView}/>

        </Stack.Navigator>
        
    )
}
export default AppStack;