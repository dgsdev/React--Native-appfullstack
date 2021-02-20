import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  container: {
    flex: 1,
    padding: 30,
    color: "#fff",
    backgroundColor: "#5f357e",
    //backgroundImage: 'linear-gradient(to left bottom, #5f0262, #53398b, #3a5caa, #117bbf, #0099cc)',
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  fundo: {
    backgroundColor: "#b3d9ff",
  },
  divlogo: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    justifyContent: "center",
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
    backgroundColor: "#f2f2f2",
    fontSize: 14,
    borderRadius: 10,
  },
  btncadastro: {
    color: "#f2f2f2",
    borderRadius: 10,
    backgroundColor: "#0099cc",
    width: 70,
    height: 70,
    marginTop: 15,
    paddingLeft: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Rubik",
    fontWeight: "bold",
    borderRadius: 10,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
