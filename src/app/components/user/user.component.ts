//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
/*import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  walletAmount: number = 0; // Add this line
  notifications: number = 0; // Add this line

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  showMessages(): void {
    // Implement this method
  }

  clearNotifications(): void {
    // Implement this method
  }
}*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  walletAmount: number = 2000; // Ejemplo de monto de dinero en la billetera
  notifications: number = 5; // Ejemplo de notificaciones
  viewingMessages: boolean = false; // Estado para saber si se están viendo los mensajes

  showMessages() {
    this.viewingMessages = true;
  }

  clearNotifications() {
    this.notifications = 0;
  }
}
