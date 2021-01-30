import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Output() newTaskEvent: EventEmitter<Task>
  task: Task;

  constructor() {
    this.newTaskEvent = new EventEmitter();
    this.task = new Task();
  }

  ngOnInit(): void {
  }

  onClick($event: any): void {
    this.newTaskEvent.emit(this.task);
    this.task = new Task();
  }

}
