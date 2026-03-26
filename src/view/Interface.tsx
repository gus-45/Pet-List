/*import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pet } from '../model/Pet';
import { PetViewModel } from '../viewModel/PetViewModel';
import { styles } from '../styles/Styles';


const viewModel = new PetViewModel();

export default function Interface() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pets, setPets] = useState<Pet[]>([]);

  function adicionarPet() {
    const erro = viewModel.adicionarPet(nome, descricao);
    if (erro) {
      alert(erro);
      return;
    }
    setPets([...viewModel.getPets()]);
    setNome('');
    setDescricao('');
  }

  function removerPet(id: number) {
    viewModel.removerPet(id);
    setPets([...viewModel.getPets()]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tituloContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
            }}
            style={styles.logo}
          />
          <Text style={styles.titulo}>Lista de Pets</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome do Pet"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />

        <View style={styles.botaoContainer}>
          <Button
            title="Adicionar Pet"
            onPress={adicionarPet}
            color="#003777"
          />
        </View>

        <FlatList<Pet>
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Pet }) => (
            <View style={styles.petItem}>
              <Text style={styles.petTexto}>
                {item.nome} - {item.descricao}
              </Text>
              <TouchableOpacity onPress={() => removerPet(item.id)}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3096/3096673.png',
                  }}
                  style={styles.iconeLixeira}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
*/