import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { PetBusiness } from "../../business/PetBusiness";
import { Pet } from "../../model/Pet";

export function ListaScreen() {
  const navigation = useNavigation<any>();
  const [pets, setPets] = useState<Pet[]>([]);

  useFocusEffect(
    useCallback(() => {
      setPets([...viewModel.getPets()]);
    }, []),
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Adicionar o pet"
          color="#0000FF"
          onPress={() => navigation.navigate("AdicionarScreen")}
        />
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Pet }) => (
            <View style={styles.petItem}>
              <View style={styles.petTexto}>
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>
              </View>

              <TouchableOpacity
                style={styles.iconeLixeira}
                onPress={() => viewModel.removerPet(item.id)}
              >
                <MaterialIcons name="delete" size={24} color="#E74C3C" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
