import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];


  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
