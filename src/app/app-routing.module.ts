import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent, children: [
    { path: 'user/inicio', component: InicioComponent },
    { path: 'messages', component: MessagesComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige a /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
