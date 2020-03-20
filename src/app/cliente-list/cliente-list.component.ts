import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from 'src/service/cliente-service.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Array<any>;

  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.clienteService.findAll().subscribe(resposta => this.clientes = resposta);
  }
}
