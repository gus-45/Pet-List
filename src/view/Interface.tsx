import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pet } from "../model/Pet";
import { PetViewModel } from "../viewModel/PetViewModel";

const viewModel = new PetViewModel();

export default function Interface() {

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pets, setPets] = useState<Pet[]>([]);

  function adicionarPet() {

    const erro = viewModel.adicionarPet(nome, descricao);

    if (erro) {
      alert(erro);
      return;
    }

    setPets([...viewModel.getPets()]);

    setNome("");
    setDescricao("");
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ padding: 20 }}>

        <Text style={{ fontSize: 22 }}>
          Lista de Pets
        </Text>

        <TextInput
          placeholder="Nome do Pet"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Button
          title="Adicionar Pet"
          onPress={adicionarPet}
        />

        <FlatList<Pet>
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Pet }) => (
            <Text>
              {item.nome} - {item.descricao}
            </Text>
          )}
        />

      </View>

    </SafeAreaView>

  );
}