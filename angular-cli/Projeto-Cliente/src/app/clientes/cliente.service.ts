import {Cliente} from './cliente.model'
export class ClienteService{
  private clientes: Cliente[] =[];
  getClientes(): Cliente[]{
    return[...this.clientes];
  }
  adicionarCliente(nome:string, fone:string, email: string){
    const cliente: Cliente={
      nome:nome, 
      fone: fone,
      email: email,
    };
    this.clientes.push(cliente);
  }
}
