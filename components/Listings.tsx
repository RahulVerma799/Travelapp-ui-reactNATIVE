import Color from '@/constants/Color'
import { listingtype } from '@/types/listingtype'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props={
    listings:any[]
}

const Listings = ({listings}:Props) => {
    const renderItems:ListRenderItem<listingtype>=({item})=>{
        return(
            <TouchableOpacity>
            <View style={styles.item}>
                    <Image source={{uri:item.image}} style={styles.image}/>

                    <View style={styles.bookmark}><Ionicons  name="bookmark-outline" size={22} color='#FFFFFF'/></View>
                    <Text style={styles.itemText} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

                    <View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome5 name='map-marker-alt' size={18} color={Color.primarycolor}/>
                    <Text>{item.location}</Text>
                        </View>
                    </View>


            </View>
            </TouchableOpacity>
        )

    }
  return (
  <>
  <View>
    <FlatList data={listings} renderItem={renderItems}
    horizontal showsHorizontalScrollIndicator={false}
    />

  
  </View>
  </>
  )
}

export default Listings


const styles=StyleSheet.create({
    item:{
        backgroundColor:Color.white,
        padding:10,
        marginRight:10,
        width:200,
    },
    image:{
        width:200,
        height:200,
        borderRadius:10,
        marginBottom:30,

    },
    bookmark:{
        position:'absolute',
        top:185,
        right:30,
        padding:10,
        backgroundColor:Color.primarycolor,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#FFFFFF'

    },
    itemText:{
        fontSize:16,
        fontWeight:'600',
        color:Color.black,
        marginBottom:10,

    }
})