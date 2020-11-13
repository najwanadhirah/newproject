import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Furniture from './Furniture';
import { Actions } from 'react-native-router-flux';

function AccountPage({ navigation }) {

  return (
    <View style={styles.container}>

      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#35262B', '#7C364E']}
        style={styles.container}>

        <View style={styles.userImg}>
          <Image style={{ borderRadius: 50, width: "100%", height: "100%" }} source={require("../pages/user.jpg")} />
        </View>

        <Text style={styles.text}>
          Hello, Balmond!
         </Text>

        <TouchableOpacity
          onPress={() => Alert.alert("My Likes")}
          style={styles.cardLisiting}>
          <View style={styles.invitee}>
            <View style={{ flexDirection: 'row', width: "90%" }}>
              <Text style={{ marginLeft: 110, marginTop: 10 }}>My Likes</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("My Voucher")}
          style={styles.cardLisiting2}>
          <View style={styles.invitee}>
            <View style={{ flexDirection: 'row', width: "90%" }}>
              <Text style={{ marginLeft: 110, marginTop: 10 }}>My Voucher</Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => Alert.alert("My Cart")}
          style={styles.cardLisiting2}>
          <View style={styles.invitee}>
            <View style={{ flexDirection: 'row', width: "90%" }}>
              <Text style={{ marginLeft: 110, marginTop: 10 }}>My Cart</Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => Alert.alert("Account Setting")}
          style={styles.cardLisiting2}>
          <View style={styles.invitee}>
            <View style={{ flexDirection: 'row', width: "90%" }}>
              <Text style={{ marginLeft: 100, marginTop: 10 }}>Account Setting</Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => Actions.Home()}
          style={styles.cardLisiting2}>
          <View style={styles.invitee}>
            <View style={{ flexDirection: 'row', width: "90%" }}>
              <Text style={{ marginLeft: 100, marginTop: 10 }}>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>

      </LinearGradient>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <View style={styles.container}>

        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Furniture" component={Furniture} />
            <Tab.Screen name="Account" component={AccountPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 170,
    marginTop: 90,
    marginLeft: 50
  },
  textStyles: {
    fontFamily: "Helvetica",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22.4,
    color: "grey",
    marginTop: 40,
    marginLeft: 60
  },
  input: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'white',
    marginBottom: 15,
    paddingTop: 10
  },
  buttonContainer: {
    height: 50,
    alignItems: 'center',
    width: 200,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 180
  },
  cardLisiting: {
    width: "70%",
    height: "8%",
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 60,
    marginRight: 30,
    marginTop: 40
  },
  cardLisiting2: {
    width: "70%",
    height: "8%",
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 60,
    marginRight: 30,
    marginTop: 10
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 130,
    fontFamily: "Helvetica",
  },
  userImg: {
    borderRadius: 100,
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 9,
    marginTop: 70,
    marginLeft: 150,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'white'
  },
  invitee: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    width: "100%",
  },
});