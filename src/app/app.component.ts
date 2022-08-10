import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `
    h3{
      color:purple;
    }
    `
  ]
})
export class AppComponent {
  title = 'todo app';

  todoItem={
    description:"walk the dog",
    action:true
  }

  getTitle(){
    return this.title;
  }
}
