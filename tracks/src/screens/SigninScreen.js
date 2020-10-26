import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        header="Sign In To Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account ? sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 200,
  },
});

export default SignInScreen;
