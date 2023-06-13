// ========================= Button ===========================
// import React from 'react';
// import {Button, Text, View} from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text>Hello world</Text>
//       <Button title="Press Here"></Button>
//     </View>
//   );
// };

// export default App;

// ============================== Components ================================
// import React from 'react';
// import {Button, Text, View} from 'react-native';
// import CompanyData from './Components/CompanyData';

// const App = () => {
//   return (
//     <View>
//       <Text>Components</Text>
//       <UserData/>
//       <CompanyData/>
//     </View>
//   );
// };

// const UserData = () => {
//   return (
//     <View>
//       <Text>Name : Anil</Text>
//       <Text>Age : 29</Text>
//       <Text>Name : anil@test.com</Text>
//     </View>
//   );
// }

// export default App;

// ============================ React Navigation ==================================
// ============================ Stack Navigation ==================================
// import React from 'react';
// import {Button, Text, View, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Home = () => {
//   return (
//     <View style={styles.homeWrapper}>
//       <Text style={{fontSize: 30}}>Home Component</Text>
//     </View>
//   );
// };

// const About = (props) => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>About Component</Text>
//       <Button
//         title="Go to Contact Page"
//         onPress={() => props.navigation.navigate('Contact')}
//       />
//     </View>
//   );
// };

// const Contact = (props) => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>Contact Component</Text>
//       <Button
//         title="Go to Home Page"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   homeWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   aboutWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// ============================ Stack Navigation ==================================
// ============================ header style ======================================
// import React from 'react';
// import {Button, Text, View, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           // title : "User Login",
//           headerStyle: {
//             backgroundColor: 'lightgreen',
//           },

//           headerTitleStyle: {
//             fontSize: 25,
//           },

//           headerTintColor: 'purple',
//         }}>
//         <Stack.Screen
//           name="About"
//           component={About}
//           options={{
//             title: 'User Login',
//             headerStyle: {
//               backgroundColor: 'pink',
//             },

//             headerTitleStyle: {
//               fontSize: 25,
//             },

//             headerTintColor: 'green',
//           }}
//         />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Home = () => {
//   return (
//     <View style={styles.homeWrapper}>
//       <Text style={{fontSize: 30}}>Home Component</Text>
//     </View>
//   );
// };

// const About = props => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>About Component</Text>
//       <Button
//         title="Go to Contact Page"
//         onPress={() => props.navigation.navigate('Contact')}
//       />
//     </View>
//   );
// };

// const Contact = props => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>Contact Component</Text>
//       <Button
//         title="Go to Home Page"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   homeWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   aboutWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// ============================== stack navigation ===================================
// ============================== header buttons =====================================
// import React from 'react';
// import {Button, Text, View, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           // title : "User Login",
//           headerStyle: {
//             backgroundColor: 'lightgreen',
//           },

//           headerTitleStyle: {
//             fontSize: 25,
//           },

//           headerTintColor: 'purple',
//         }}>

//         <Stack.Screen
//           name="About"
//           component={About}
//           options={{
//             headerTitle : ()=><Button onPress={()=> console.warn("Button Pressed")} title="left" />,
//             headerRight : ()=><Button onPress={()=> console.warn("Button Pressed")} title="right" />,

//             title: 'User Login',
//             headerStyle: {
//               backgroundColor: 'pink',
//             },

//             headerTitleStyle: {
//               fontSize: 25,
//             },

//             headerTintColor: 'green',
//           }}
//         />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Home = () => {
//   return (
//     <View style={styles.homeWrapper}>
//       <Text style={{fontSize: 30}}>Home Component</Text>
//     </View>
//   );
// };

// const About = props => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>About Component</Text>
//       <Button
//         title="Go to Contact Page"
//         onPress={() => props.navigation.navigate('Contact')}
//       />
//     </View>
//   );
// };

// const Contact = props => {
//   return (
//     <View style={styles.aboutWrapper}>
//       <Text style={{fontSize: 30, marginBottom: 10}}>Contact Component</Text>
//       <Button
//         title="Go to Home Page"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   homeWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   aboutWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// ================================= Tab Navigation ====================================
// import React from "react";
// import {View, Text} from "react-native";
// import {NavigationContainer} from "@react-navigation/native";
// // import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// // import { create } from "react-test-renderer";

// const Tab = createBottomTabNavigator();

// const App = () =>{
//   return(
//     <NavigationContainer>
//       <Tab.Navigator>
//          <Tab.Screen name="Login" component={Login} />
//          <Tab.Screen name="SignUp" component={SignUp} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const Login = () =>{
//   return <View><Text>Login</Text></View>
// }

// const SignUp = () =>{
//   return <View><Text>SignUp</Text></View>
// }

// export default App;

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// ===================================== Top Tab Navigation ======================================
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './Screens/Chats';
import Status from './Screens/Status';
import Calls from './Screens/Calls';
import Header from './Components/Header';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, fontWeight:500, letterSpacing : 1, color : "white", textTransform :"capitalize" },
          tabBarStyle: { backgroundColor: '#128C7E'},
        }}
      >
        <Tab.Screen name="Chats" component={Chats}/>
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
