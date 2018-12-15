import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = '';
  todos = [];

  onAddTodo() {
    const { todo, todos } = this;

    todos.push(todo);

    this.todo = '';
  }

  onDeleteTodo(e) {
    const { todos } = this;

    const todo: string = e.target.parentElement.childNodes[0].data.toString().trim();
    const item = todos.indexOf(todo);

    todos.splice(item, 1);
  }
}
