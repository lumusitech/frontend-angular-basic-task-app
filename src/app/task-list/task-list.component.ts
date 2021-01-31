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

  onClickComplete(tarea: Task): void {
    tarea.completed = !tarea.completed;
  }

  onClickDelete(tarea: Task): void {
    tarea.deleted = !tarea.deleted;
  }

}
