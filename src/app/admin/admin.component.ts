import { Component, OnInit } from '@angular/core';
import { Client, CLIENTS } from '../clients'; // Importa CLIENTS como ejemplo de datos
import { User, USERS } from '../users'; // Importa USERS como ejemplo de datos

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clients: Client[] = CLIENTS;
  users: User[] = USERS;
  currentView: string = 'clients';

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  selectView(view: string): void {
    this.currentView = view;
  }

  save(client: Client): void {
    console.log('Saving client:', client);
    // Aquí puedes agregar la lógica para guardar los datos
  }
}
