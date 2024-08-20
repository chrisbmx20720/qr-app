import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages = [
    { title: 'Mensaje 1', body: 'Contenido del mensaje 1. Lorem ipsum dolor sit amet.' },
    { title: 'Mensaje 2', body: 'Contenido del mensaje 2. Lorem ipsum dolor sit amet.' },
    { title: 'Mensaje 3', body: 'Contenido del mensaje 3. Lorem ipsum dolor sit amet.' },
    { title: 'Mensaje 4', body: 'Contenido del mensaje 4. Lorem ipsum dolor sit amet.' }
  ];
}
