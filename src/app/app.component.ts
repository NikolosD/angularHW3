import { Component } from '@angular/core';
import {CounterComponent} from "./counter-container/counter/counter.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {
  CounterParentComponentComponent
} from "./counter-container/counter-parent-component/counter-parent-component.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    CounterComponent,
    TodoListComponent,
    CounterParentComponentComponent
  ]
})
export class AppComponent {

}
