import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-recycler-bin',
  templateUrl: './recycler-bin.component.html',
  styleUrls: ['./recycler-bin.component.sass']
})
export class RecyclerBinComponent implements OnInit {

  @Input() currentList: Task[];

  constructor() {
    this.currentList = [];
  }

  ngOnInit(): void {
  }

  onClick($event: Task): void {
    $event.deleted = !$event.deleted;
  }

}
