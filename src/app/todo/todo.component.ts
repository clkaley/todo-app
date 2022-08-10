import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() { }
  name="Aleyna"
  //items=["item1","item2","item3"]
  items=[
    {
      id:1,description:"walking dog",action:"yes"
    },
    {
      id:2,description:"shopping dog",action:"no"
    },
    {
      id:3,description:"homework dog",action:"yes"
    },
  ]
 

}
