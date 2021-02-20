import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { Card, ListItem, Button, Icon, Tile } from "react-native-elements";
import { registerCustomIconType } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
registerCustomIconType('font-awesome-5', FontAwesome5);

import styles from "../../screens/Login/styles";

const tarefas = [
  {
    nome: "Aprender Javascript",
  },
  {
    nome: "Aprender NodeJS",
  },
  {
    nome: "Aprender React",
  },
  {
    nome: "Aprender React Native",
  },
  {
    nome: "Aprender MongoDB",
  },
  {
    nome: "Aprender HTML5 e CC3",
  },
];

function Tarefas() {
  return (
    
    <ScrollView>
     <ImageBackground style={styles.fundo}>
      {/*
        <View>
            {
                tarefas.map((tarefa, index) => 
                <Text key={index}>{tarefa.nome}</Text>
                )
            }
        </View>
        */}
        
        
      <Tile
        imageSrc={require("../../../assets/stack.jpg")}
        title=""
        featured
        caption=""
      />
    
      <Icon  name='sign-in-alt'
            type = 'font-awesome-5'
            color='#fff'
            style={{width: 100, marginTop: 15}} />   

   
      <Card style={{ borderRadius: 10}}>
        <Card.Title>JAVASCRIPT</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/js.png")}>
          <Text style={{ marginTop: 5, marginLeft: 12, marginBottom: 10 }}>
            Linguagem de Programação Javascript ES6.
          </Text>
          
        </Card.Image>
        
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 0,
              marginTop: 10,
              width: '55%',
              
            }}
            title="Aprender Javascript"
          />
      <Card>

        <Card.Title>NODEJS</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/node.png")}>
          <Text style={{ marginTop: 5, marginLeft: 50, marginBottom: 10 }}>
            Tempo de Execução Javascript.
          </Text>
          
        </Card.Image>
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 0,
              marginTop: 10,
              width: '50%',
              
            }}
            title="Aprender NodeJS"
          />
      <Card>


        <Card.Title>REACT</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/react.png")}>
          <Text style={{ marginTop: 5, marginLeft: 12, marginBottom: 10 }}>
            Biblioteca React Para construir interfaces Web.
          </Text>
         
        </Card.Image>
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 0,
              marginTop: 10,
              width: '50%',
              
            }}
            title="Aprender React"
          />
      <Card>

        <Card.Title>HTML 5</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/html.png")}>
          <Text style={{ marginTop: 5, marginLeft: 30, marginBottom: 10 }}>
            HTML é Linguagem de Marcação de Hipertexto.
          </Text>
          
        </Card.Image>
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 0,
              marginTop: 10,
              width: '50%',
              
            }}
            title="Aprender HTML 5"
          />
      <Card>

        <Card.Title>CSS 3</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/css.png")}>
          <Text style={{ marginTop: 5, marginLeft: 12, marginBottom: 10 }}>
            CSS é uma linguagem de estilo de páginas HTML (cores, fontes,
            espaçamento, etc.).
          </Text>
          
        </Card.Image>
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 0,
              marginTop: 10,
              width: '50%',
              
            }}
            title="Aprender CSS 3"
          />
      <Card>


        <Card.Title>REACT NATIVE</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../../../assets/reactnative.png")}>
          <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10 }}>
            React Native é uma biblioteca Javascript criada pelo Facebook.
          </Text>
          
        </Card.Image>
      </Card>
      <Button
            icon={<Icon name="code" color="#fff" />}
            buttonStyle={{              
              backgroundColor: "#f77e6e",
              borderRadius: 5,
              marginLeft: 80,
              marginRight: 10,
              marginBottom: 10,
              marginTop: 10,
              width: '60%',
              
            }}
            title="Aprender React Native"
          />
          </ImageBackground>
    </ScrollView>
  );
}

export default Tarefas;
