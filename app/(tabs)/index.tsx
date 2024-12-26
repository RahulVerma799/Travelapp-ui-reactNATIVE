import React, { useState } from 'react'; 
import color from "@/constants/Color";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destinations.json';



export default function index() {
    const headerHeight = useHeaderHeight();

    const [category,setCategory]=useState('All')

    const onCategoryChanged = (category: string) => {
        setCategory(category);
        console.log("Selected category:", category);
    };


    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
                        <Image 
                            source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }}
                            style={{ width: 40, height: 40, borderRadius: 10 }} 
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            marginRight: 20,
                            backgroundColor: color.white,
                            padding: 12,
                            borderRadius: 5,
                            shadowColor: "#171717",
                            shadowOffset: { width: 0.2, height: 0.4 },
                            shadowRadius: 0.3,
                            shadowOpacity: 0.3,
                            elevation: 5,
                        }}
                    >
                        <Ionicons name="notifications" size={20} color={color.black} />
                    </TouchableOpacity>
                ),
            }} 
            />
            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

                <View style={styles.searchBarSection}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} style={{ marginRight: 5, color: color.black }} />
                        <TextInput placeholder="Search..." style={styles.input} />
                    </View>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons name="options" size={28} style={{ marginLeft: 10, color: color.black }} />
                    </TouchableOpacity>
                </View>
                <CategoryButtons onCategoryChanged={onCategoryChanged} />
                <Listings listings={listingData}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: color.bgcolor,
    },
    headingTxt: {
        fontSize: 28,
        fontWeight: "800",
        color: color.black,
        marginTop: 10,
    },
    searchBarSection: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFFFF", // Static white color for the search bar
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: color.black,
    },
});
