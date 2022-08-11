import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
//import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  displayAll:boolean=false;

  constructor() { }
  
  model=new Model();


  addItem(value:string){
    //inputun içi boş değilse listeye ekle
    if(value!==""){
      console.log("inputta ne var:",value);
      this.model.items.push({
        description:value,action:false
      })
    }
    //inputun içi boşsa hataya düşür alert çıkart :)
    else{
      alert("kanka todo gir")
    }
  }


  getItems(){
    if(this.displayAll){
      return this.model.items
    }
    else{
      return this.model.items.filter(item=>!item.action);
    }
  }
  
  displayCount(){
    return this.model.items.filter(item=>item.action).length;
  }

}


  /*
  name="Aleyna"
  //items=["item1","item2","item3"]
  items:TodoItem[]=[
    //!interface li model için
    {description:"walk",action:"yes"},
    {description:"shopping",action:"no"},

  //!constructor lı model için
  //  new TodoItem("asdads","asdsa"),
  //  new TodoItem("fsgsf","dsfds"),
  //  new TodoItem("sfddf","sdfsd"),
  ]*/