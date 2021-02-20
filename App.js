//import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';

import {StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(senha);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <StatusBar hidden />

      <Text style={styless.text}>STACK JAVASCRIPT</Text>  

      <View style={styles.divlogo}>
      <Image source={require('./assets/html.png')}
            style={styles.logo}>
      </Image>

      <Image source={require('./assets/css.png')}
            style={styles.logo}>
      </Image>
      
      <Image source={require('./assets/js.png')}
            style={styles.logo}>
      </Image>
      
      <Image source={require('./assets/react.png')}
            style={styles.logo}>
      </Image>

      <Image source={require('./assets/node.png')}
            style={styles.logo}>
      </Image>

      <Image source={require('./assets/reactnative.png')}
            style={styles.logo}>
      </Image>      
      </View>
    
      <TextInput
          style={styles.input} 
          placeholder="Digite seu usuário"
          onChangeText = {text => setNome(text)}>
      </TextInput>

      <TextInput
          style={styles.input} 
          placeholder="Digite seu e-mail"
          onChangeText = {text => setEmail(text)}>                
      </TextInput>

      <TextInput 
          style={styles.input} 
          placeholder="Digite sua senha"
          onChangeText = {text => setSenha(text)}
          secureTextEntry={true}>               
      </TextInput>  
      {/*
      <TouchableOpacity style={styles.btncadastro}
                        onPress={() => cadastro()}>
                        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>  
      */}
      <Button title="Cadastrar"
              buttonStyle={stylesss.button}              
              onPress={() => alert('Você apertou o Botão, em breve, nova funcionalidade de autenticação será incluída!')} >
      </Button>               
      
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: '#fff',
    backgroundColor: '#5f357e',
    alignItems: 'center',
    justifyContent: 'center',   
    height: '100%',
    
  },
  divlogo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    justifyContent: 'center',   
  },
  logo: {    
    margin: 4,
    width: 100,
    height: 90,
    borderRadius: 150,
  },
  input: {
    marginTop: 20,
    padding: 10,
    paddingLeft: 20,
    width: 300,
    backgroundColor: '#f2f2f2',
    fontSize: 14,
    borderRadius:10,    
  },
  btncadastro: {
    color: '#f2f2f2',
    borderRadius: 10,
    backgroundColor: '#0099cc',
    width: 70,
    height: 70,
    marginTop: 15,
    paddingLeft: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    borderRadius: 10,   
    fontWeight: 'bold',  
    alignItems: 'center',
    justifyContent: 'center',
  } 
});

const styless = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    borderRadius: 10, 
    fontSize: 30,  
    fontWeight: 'bold',  
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  const stylesss = StyleSheet.create({
    button: {
    backgroundColor: "#f55742",
    color: "#fff",
    margin: 15,
    width: 100,
    height: 40,    
    fontFamily: 'Roboto',
    borderRadius: 10,     
    fontWeight: 'bold',     
    }
});


