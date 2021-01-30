import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input() currentList: Task[];

  constructor() {
    this.currentList = [];
  }

  ngOnInit(): void {
  }

  onClickComplete(tarea: Task, $event: any): void {
    tarea.completed = !tarea.completed;
    if (tarea.completed) $event.target.innerText = "Rehacer";
    else $event.target.innerText = "Completar"
  }

  onClickDelete(tarea: Task): void {
    tarea.deleted = !tarea.deleted;
  }

}
