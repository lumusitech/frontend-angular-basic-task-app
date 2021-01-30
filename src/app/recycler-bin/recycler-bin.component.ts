import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-recycler-bin',
  templateUrl: './recycler-bin.component.html',
  styleUrls: ['./recycler-bin.component.sass']
})
export class RecyclerBinComponent implements OnInit {

  @Input() currentList: Task[];
  @Output() restoreTaskEvent: EventEmitter<number>

  constructor() {
    this.currentList = [];
    this.restoreTaskEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.currentList);
  }

  onClick($event: any): void {
    $event.stopPropagation();
    console.log($event);
    let id = $event.target.parentNode.firstChild.innerText;
    this.restoreTaskEvent.emit(id);
  }

}
