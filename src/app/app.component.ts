import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  taskList: Task[];

  constructor() {
    this.taskList = [];
  }

  onNewTaskEvent($event: Task): void {
    $event.id = this.taskList.length;
    this.taskList.push($event);
  }

  onClick(): void {
    let confirmed = confirm('Vaciar la papelera de notas?');
    if (confirmed)
      this.taskList = this.taskList.filter((task) => !task.deleted);
  }
}
