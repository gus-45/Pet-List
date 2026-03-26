import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
 
  
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
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
 
  
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#000",
  },
 
  
  botaoContainer: {
    marginTop: 10,
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
  petInfo: {
    flex: 1,
    marginRight: 10,
  },
  petTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  petDescricao: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  botaoExcluir: {
    padding: 4,
  },
});