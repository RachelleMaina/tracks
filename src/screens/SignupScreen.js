import React, {  useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
     <AuthForm headerText="Sign Up for Tracker" errorMessage={state.errorMessage} submitButtonText="Sign Up" onSubmit={signin}/>
     <NavLink navText="Already have an account? Sign in instead." routeName="Signin"/>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  link: {
    color: "blue",
  },
});
export default SignupScreen;
