import { Pet } from "../model/Pet";

export class PetBusiness {
  
  validarPet(nome: string, lista: Pet[]): String | null {
    if(nome.length <= 2) {
      return("O nome do pet precisa ter no minímo 2 caracteres");
    }
    const nomeIgual = lista.find(pet => pet.nome === nome);

    if(nomeIgual) {
      return "Já existe um pet com esse nome";
    }

    return null;
  }
  
}