import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={require('../assets/Images/img2.jpg')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View>
        <View style={styles.topUserCardWrapper}>
          <Text>Ankush Chavhan</Text>
          <Text>2:27 pm</Text>
        </View>

        <View>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            nesciunt.
          </Text>
          <Text>2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flex: 1,
    flexDirection: 'row',
  },
  profileWrapper: {
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    overflow: 'hidden',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

//   topUserCardWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },


});

export default UserCard;
