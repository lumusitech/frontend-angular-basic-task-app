export class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  deleted: boolean;

  constructor(pTitle: string = "", pDesc: string = "", pCompleted = false, pDeleted = false) {
    this.title = pTitle;
    this.description = pDesc;
    this.completed = pCompleted;
    this.deleted = pDeleted;
    this.id = -1;
  }
}
