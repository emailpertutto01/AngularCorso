import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input()  task!: Task;
  @Output() completato = new EventEmitter<string>(); 
 

  completeTask(){ 
    this.completato.emit(this.task.id); 
  }
}



interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
