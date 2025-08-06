import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../assets/dummy_task';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  users = DUMMY_USERS; 
  utenteSelezionatoId?: string; 

  get utenteSelezionato(){ 
    return this.users.find((user) => user.id  === this.utenteSelezionatoId)!;
  }

  utenteSelezionatoClick(id: string){ 
    this.utenteSelezionatoId = id; 
  }
}
        