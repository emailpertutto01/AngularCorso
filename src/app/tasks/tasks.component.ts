import { Component, Input } from '@angular/core';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { dummyTasks } from '../../assets/taskPerUtente';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [SingleTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string; 
  allTask?: singleTask[] = dummyTasks; 

  get taskUtenteSelezionato(){ 
    return this.allTask!.filter((task) => task.userId === this.userId); 
  }

  onCompleteTask(id: string){ 
      this.allTask = this.allTask?.filter((task) => task.id !== id)
  }
}

interface singleTask { 
    id: string,
    userId: string,
    title: string,
    summary: string, 
    dueDate: string, 
}