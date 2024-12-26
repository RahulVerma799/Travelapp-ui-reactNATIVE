import { Stack,Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import color from "../../constants/Color";
import { View } from "react-native";


export default function RootLayout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle:{
            backgroundColor:color.bgcolor,
            borderTopWidth:0,
            padding:0,
        },
        tabBarShowLabel:false,
        tabBarActiveTintColor:color.black,
        tabBarInactiveTintColor:'#999'
    }}>
        <Tabs.Screen name="index" options={{tabBarIcon:({color})=>( 
            <Ionicons name="compass" size={28} color={color}/>
        )}}/>
        <Tabs.Screen name="bookmarks" options={{tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="material-design" size={24} color={color} />
        )}}/>

<Tabs.Screen name="search" options={{tabBarIcon:({color})=>(
           <Fontisto name="search" size={24} color={'#FFFFF'} />
        )}}/>

        <Tabs.Screen name="category" options={{tabBarIcon:({color})=>(
            <MaterialIcons name="category" size={24} color={color} />
        )}}/>
        <Tabs.Screen name="profile" options={{tabBarIcon:({color})=>(
            <FontAwesome name="user" size={28} color={color} />
        )}}/>
       
    </Tabs>

)
}
