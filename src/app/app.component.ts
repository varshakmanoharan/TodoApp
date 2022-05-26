import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo app';
  todos =[
  {label: 'Bring Milk',
  done:false, 
  priority:1
},
{label: 'Bring Pickles',
  done:true, 
  priority:2
},
{label: 'Pay mobile bil',
  done:false, 
  priority:3
},
{label: 'Clean House',
  done:false, 
  priority:4
},
{label: 'Fix the bulb',
  done:false, 
  priority:5
}
  ];

  addTodo(newTodoLabel:any){
    var newTodo ={
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo:any){
this.todos =this.todos.filter(t => t.label !== todo.label);
  }
  }

