import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
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
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Nome do pet"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Descrição"
          style={[styles.input, styles.input]}
          value={descricao}
          onChangeText={setDescricao}
        />

        <Button
          title="Adicionar o pet"
          color="#0000FF"
          onPress={adicionarPet}
        />
      </View>
    </SafeAreaView>
  );
}
