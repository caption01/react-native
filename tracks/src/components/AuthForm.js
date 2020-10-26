import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import Spacer from "../components/Spacer";

const AuthForm = ({ header, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{header}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          autoCapitalize={"none"}
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Spacer />
        <Input
          label="Password"
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Spacer />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginBottom: 16,
  },
});

export default AuthForm;
