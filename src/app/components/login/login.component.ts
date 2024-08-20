import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { } // Inyectar el Router

  onLogin(): void {
    // Aquí validarías las credenciales del usuario
    if (this.username === 'admin' && this.password === '123') {
      // Si las credenciales son válidas, redirigir a /user
      this.router.navigate(['/user']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
