import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy_task';

const numeroCasuale = Math.floor(Math.random() * DUMMY_USERS.length); 
interface User  { 
     id: string; 
    avatar: string; 
    name: string; 
  };

  @Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  
  // //definisco utenteSelezionato come un signal 
  // utenteSelezionato = signal(DUMMY_USERS[numeroCasuale]); 

  // // get imagePath(){ 
  // //   return 'assets/users/' + this.utenteSelezionato.avatar; 
  // // }

  // imagePath = computed(() => 'assets/users/' + this.utenteSelezionato().avatar); 

  // cambiaUtente(){ 
  //   // const numeroCasuale = Math.floor(Math.random() * DUMMY_USERS.length); 
  //   // //tramite signal posso settare la variabile 
  //   // this.utenteSelezionato.set(DUMMY_USERS[numeroCasuale]); 
  // }

  //DEFINISCO GLI INPUT DEL COMPONENTE 
  @Input({ required: true }) user!: User;
  //DEFINISCO L EVENTO OUTPUT DA PASSARE AL PADRE
  @Output() utenteCliccato = new EventEmitter<string>(); 
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 
  @Input({ required: true }) selezionato!: boolean; 


  get imagePath(){ 
    return 'assets/users/' + this.user.avatar; 
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar(); 
  // })

  selezionaUtente(){ 
    this.utenteCliccato.emit(this.user.id); 
  }
}
