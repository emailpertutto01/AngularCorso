import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../assets/dummy_task';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  users = DUMMY_USERS; 
  utenteSelezionatoId = 'u1'; 

  get nomeUtenteSelezionato(){ 
    return this.users.find((user) => user.id  === this.utenteSelezionatoId)!;
  }

  utenteSelezionato(id: string){ 
    this.utenteSelezionatoId = id; 
  }
}
