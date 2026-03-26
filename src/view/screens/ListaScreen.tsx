import React, { useState, useCallback } from "react";
import { View, Button, Text, FlatList, TouchableOpacity } from "react-native";
import { viewModel } from "../../viewModel/PetViewModel";
import { styles } from "../../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { Pet } from "../../model/Pet";

export function ListaScreen() {
  const navigation = useNavigation<any>();
  const [pets, setPets] = useState<Pet[]>([]);

  useFocusEffect(
    useCallback(() => {
      setPets([...viewModel.getPets()]);
    }, []),
  );

  function removerPet(id: number) {
    viewModel.removerPet(id);
    setPets([...viewModel.getPets()]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.botaoContainer}>
          <Button
            title="Adicionar Pet"
            color="#003777"
            onPress={() => navigation.navigate("Adicionar")}
          />
        </View>
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Pet }) => (
            <View style={styles.petItem}>
              <View style={styles.petInfo}>
                <Text style={styles.petTexto}>{item.nome}</Text>
                <Text style={styles.petDescricao}>{item.descricao}</Text>
              </View>
              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => removerPet(item.id)}
              >
                <MaterialIcons name="delete" size={24} color="#ff2400" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
