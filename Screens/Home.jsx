import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Image from "../assets/1.jpg";
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Appbar style={{ backgroundColor: "white" }}>
        <Appbar.Action
          icon="instagram"
          onPress={() => console.log("Insta Pressed")}
        />
        <Appbar.Content title="New" />
        <Appbar.Action
          icon="account-circle-outline"
          onPress={() => console.log("Account Pressed")}
        />
        <Appbar.Action
          icon="google"
          onPress={() => console.log("Google Pressed")}
        />
      </Appbar>
      <TouchableOpacity onPress={() => console.log("Image Pressed")}>
        <Avatar.Image
          source={Image}
          size={160}
          style={{ alignSelf: "center", margin: 40 }}
        />
      </TouchableOpacity>
      <Button
        textColor="white"
        style={{
          backgroundColor: "blue",
          margin: 30,
          borderRadius: 30,
          marginHorizontal: 60,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        CLICK ME
      </Button>
      <Headline style={{ textAlign: "center", marginTop: 20 }}>
        About Me
      </Headline>
      <Text
        style={{
          textAlign: "center",
          width: "50%",
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        {" "}
        Hey, This is my first React Native App. I am on a journey of becoming a
        web and an android developer.{" "}
      </Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;
