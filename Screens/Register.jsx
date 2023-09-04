import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";
import { TextInput, Button, Checkbox, Headline } from "react-native-paper";

const Main = ({ navigation }) => {
  const [checked, setchecked] = useState(false);
  return (
    <View>
      <Headline style={styles.heading}>Register</Headline>
      <TextInput placeholder="First Name" style={styles.inputs} />
      <TextInput placeholder="Last Name" style={styles.inputs} />
      <TextInput placeholder="E-mail" style={styles.inputs} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputs}
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: 20,
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setchecked((prev) => !prev)}
          color="rgba(108,21,222,1)"
        />
        <Text>Please Accept All Terms & Conditions</Text>
      </View>
      <Button
        textColor="white"
        style={styles.btn}
        onPress={() => console.log("Registered")}
        disabled={checked ? false : true}
      >
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "white",
    marginHorizontal: 60,
    marginVertical: 5,
  },
  heading: {
    textAlign: "center",
    marginVertical: 20,
    color: "rgba(108, 21, 222, 1)",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "tomato",
    borderRadius: 50,
    paddingVertical: 4,
    width: "60%",
    alignSelf: "center",
  },
});
