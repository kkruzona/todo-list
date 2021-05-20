import { Component } from '@angular/core';

export interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  tasks: Todo[] = [
    {
      task: "fold clothes",
      completed: false
    },
    {
      task: "put clothes in dresser",
      completed: false
    },
    {
      task: "relax",
      completed: false
    },
    {
      task: "try to pet cat",
      completed: true
    },
    {
      task: "pet dog",
      completed: false
    },
    {
      task: "be awesome",
      completed: false
    },
    ];

    // onUpdate(){
    //   task.completed === true;
    // }
}
