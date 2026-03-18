import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  botaoContainer: {
    marginVertical: 10,
    width: 120,
    alignSelf: "center",
  },
  petItem: {
    flexDirection: "row",          
    justifyContent: "space-between", 
    alignItems: "center",          
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tituloContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 15,
  },
  logo: {
  width: 35,
  height: 35,
  marginRight: 10,
  },
  petTexto: {
    fontSize: 16,
    flex: 1,                       
    marginRight: 10,             
  },
  botaoExcluir: {
    width: 80,                    
  },
  iconeLixeira: {
    width: 28,
    height: 28,
  },
});