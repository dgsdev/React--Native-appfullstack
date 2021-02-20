import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";

import { Button } from "react-native-elements";

import styles from "./styles";

const apiusuario = {
  id: 1,
  usuario: "dgs",
  email: "dgs@123",
  senha: "123",
};

function Login({ navigation }) {
  function autenticacao() {
    if (
      apiusuario.usuario === usuario &&
      apiusuario.email === email &&
      apiusuario.senha === senha
    ) {
      navigation.navigate("Modulos");
    } else {
      Alert.alert("Usuário inválido!", "Esse usuário não existe.");
    }
  }

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <ScrollView>
      <View style={styles.caixa}>
        <ImageBackground style={styles.container}>
          <Text style={styless.text}>STACK JAVASCRIPT</Text>

          <View style={styles.divlogo}>
            <Image
              source={require("../../../assets/html.png")}
              style={styles.logo}
            ></Image>

            <Image
              source={require("../../../assets/css.png")}
              style={styles.logo}
            ></Image>

            <Image
              source={require("../../../assets/js.png")}
              style={styles.logo}
            ></Image>

            <Image
              source={require("../../../assets/react.png")}
              style={styles.logo}
            ></Image>

            <Image
              source={require("../../../assets/node.png")}
              style={styles.logo}
            ></Image>

            <Image
              source={require("../../../assets/reactnative.png")}
              style={styles.logo}
            ></Image>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Digite o senha..."
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          {/*
          <TouchableOpacity style={styles.btn} onPress={autenticacao}>
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>
          */}

          <Button
            title="Entrar"
            buttonStyle={styless.button}
            onPress={autenticacao}
          ></Button>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styless = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Roboto",
    borderRadius: 10,
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f77e6e",
    color: "#fff",
    margin: 15,
    width: 100,
    height: 40,
    fontFamily: "Roboto",
    borderRadius: 10,
    fontWeight: "bold",
  },
});

export default Login;
