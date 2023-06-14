# WhatsApp-Clone
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const UserCard = () => {
  
  

  return (
    <View style={styles.container}>
       <View style={styles.profileWrapper}>
         <Image style={styles.profileImg} source={require("../assets/images/img1.jpeg")}/>
       </View>
       <View style={styles.right}>
         {/* <Text style={styles.userName}>Ankush Chavhan</Text>
         <Text style={styles.bottomText}>Lorem ipsum, dolor sit amet consectetur adipisicing</Text> */}
         <View style={styles.rightTop}>
            <Text style={styles.userName}>Ankush Chavhan</Text>
            <Text style={styles.msgTime}>2:27 pm</Text>
         </View>

         <View style={styles.rightBottom}>
             <Text style={styles.bottomText}>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
             <View style={styles.msgCountWrapper}>
              <Text style={styles.msgCount}>2</Text>
             </View>
         </View>
       </View>
    </View>
  )
}

const { width } = Dimensions.get('window');
const calculatedWidth = width - 70;

const styles = StyleSheet.create({
    container : {
       flexDirection : "row",
       height : 70,
       borderBottomColor : "gray",
       borderBottomWidth : .4,
    },
    profileWrapper : { 
       width : 70,
    //    flex : 1,
       justifyContent : "center",
       alignItems : "center",
    }
    ,
    profileImg : {
        width: 53,
        height : 53,
        borderRadius : 27
    },
    
    
    right : {
       padding : 5
    },

    rightTop : {
      width : calculatedWidth,
      flexDirection : "row",
      justifyContent : "space-between",
      paddingRight :10,paddingTop:5
    }
   ,
    userName : {
      fontSize : 17,
      fontWeight : "500",
      

      },
      msgTime : {
        fontWeight : "400"
    },

    rightBottom : {
      width : calculatedWidth,
      flexDirection : "row",
      justifyContent : "space-between",
      paddingRight : 10
    },

    bottomText : {
      fontSize : 16,
      fontWeight : 400,
      color : "#7d807e",
      height : 20,
      overflow : "hidden",
      width : calculatedWidth - 50
    }
    ,
    msgCountWrapper : {
      width : 50,      
      flexDirection : "row",
      justifyContent : "flex-end",
      alignItems : "center",
      paddingRight : 10
    },
    msgCount : {
      fontSize : 12,
      padding : 3,
      paddingHorizontal : 7,
      borderRadius : 10,
      color : "white",
      backgroundColor : "#59CE72",
      overflow : "hidden"
    }

})

export default UserCard
