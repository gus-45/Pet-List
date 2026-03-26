import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Button, TextInput, Text } from "react-native";
import { viewModel } from "../../viewModel/PetViewModel";
import { styles } from "../../styles/Styles";
 
export function AdicionarScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
 
  function adicionarPet() {
    const erro = viewModel.adicionarPet(nome, descricao);
    if (erro) {
      alert(erro);
      return;
    }
    setNome("");
    setDescricao("");
    navigation.goBack();
  }
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome do Pet</Text>
        <TextInput
          placeholder="Digite o nome do pet"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
 
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          placeholder="Digite a descrição"
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
        />
 
        <View style={styles.botaoContainer}>
          <Button
            title="Adicionar Pet"
            color="#003777"
            onPress={adicionarPet}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}