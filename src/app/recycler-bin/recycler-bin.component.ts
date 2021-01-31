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

  onClickDelete($event: Task): void {
    $event.deleted = !$event.deleted;
  }

  onClickDestroy(i: number): void {
    let confirmed: boolean = confirm("La nota se borrará definitivamente, Está seguro que quiere proceder?");
    if (confirmed) this.currentList.splice(i, 1);
  }

}
