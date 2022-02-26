export class TaskModel {
  constructor(id = 0, title = "", completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
