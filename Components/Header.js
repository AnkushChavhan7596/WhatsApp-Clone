import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerHeading}>WhatsApp</Text>
      </View>
      <View style={styles.headerIconsWrapper}>
        <TouchableOpacity>
          <Icon
            name="photo-camera"
            size={25}
            color="white"
            style={{marginLeft: 7}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="search"
            size={25}
            color="white"
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="more-vert"
            size={25}
            color="white"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 15,
  },

  headerIconsWrapper: {
    flexDirection: 'row',
  },

  headerHeading: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
  },
});

export default Header;
