import { Pet } from "../model/Pet";
import { PetBusiness} from "../business/PetBusiness";

export class PetViewModel {
  
  private lista: Pet[] = [];
  private business = new PetBusiness();
  private idAtual = 1;

  getPets() {
    return this.lista;
  }
  
  adicionarPet( nome: string, descricao: string): String | null {
    
    const erro = this.business.validarPet(nome, this.lista);

    if(erro) {
      return erro;
    }

    const novoPet: Pet = {
      id: this.idAtual++, 
      nome: nome,
      descricao: descricao
    };

    this.lista.push(novoPet);

    return null;
  }
}