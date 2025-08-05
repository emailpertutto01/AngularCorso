import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy_task';

const numeroCasuale = Math.floor(Math.random() * DUMMY_USERS.length); 

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
  @Input({ required: true}) id!: string; 
  @Input({ required: true }) avatar!: string; 
  @Input({ required: true }) name!: string; 
  //DEFINISCO L EVENTO OUTPUT DA PASSARE AL PADRE
  @Output() utenteCliccato = new EventEmitter<string>(); 
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 

  get imagePath(){ 
    return 'assets/users/' + this.avatar; 
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar(); 
  // })

  selezionaUtente(){ 
    this.utenteCliccato.emit(this.id); 
  }
}
