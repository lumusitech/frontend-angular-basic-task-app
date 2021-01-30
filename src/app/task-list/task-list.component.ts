import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input() currentList: Task[];
  selectedIndex: number;
  @Output() completedEvent: EventEmitter<number>;
  @Output() deletedEvent: EventEmitter<number>;
  completed: boolean;
  btnCompleted: string;

  constructor() {
    this.currentList = [];
    this.selectedIndex = -1;
    this.completedEvent = new EventEmitter();
    this.deletedEvent = new EventEmitter();
    this.completed = false;
    this.btnCompleted = "Completar"
  }

  ngOnInit(): void {
  }

  onClickComplete($event: any): void {
    let id: number = $event.target.parentNode.parentNode.firstChild.innerText;
    this.completedEvent.emit(id);
  }

  onClickDelete($event: any): void {
    let id: number = $event.target.parentNode.parentNode.firstChild.innerText;
    this.deletedEvent.emit(id);
  }

}
