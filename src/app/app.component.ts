import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  taskList: Task[];
  id: number;

  constructor() {
    //this.taskList = [{ title: 'titulo de prueba', description: 'Descripción de prueba para desarrolar los estilos' }];
    this.taskList = [];
    this.id = 0;
  }
  onNewTaskEvent($event: Task): void {
    $event.id = this.taskList.length;
    this.taskList.push($event);
  }

  onCompletedEvent($event: number): void {
    this.taskList[$event].completed = !this.taskList[$event].completed;
  }

  onDeletedEvent($event: number): void {
    this.taskList[$event].deleted = !this.taskList[$event].deleted;
  }
}
