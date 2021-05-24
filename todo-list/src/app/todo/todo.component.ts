import { Component, OnInit, Input } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  addTodo: string = '';

  searchTerm: string = '';

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


    removeTask(index: number) {
      this.tasks.splice(index,1)
    }

    completeTask(index: number) {
      this.tasks[index].completed = true;
    }

    addTask() {
      this.tasks.push({
        task: this.addTodo,
        completed: false
      })
        // console.log(this.addTodo);
        this.addTodo='';
    }

  constructor() { }

  ngOnInit(): void {
  }

}
