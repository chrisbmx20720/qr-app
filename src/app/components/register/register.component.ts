import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Lógica para manejar el envío del formulario
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
