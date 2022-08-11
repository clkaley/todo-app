import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
//import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() { }
  
  model=new Model();
  message=""

  // addItem(txtItem:any){
  //   console.log("inputta ne var:",txtItem);
  // }

  addItem(value:string){
    //inputun içi boş değilse listeye ekle
    if(value!==""){
      console.log("inputta ne var:",value);
      this.model.items.push({
        description:value,action:"no"
      })
    }
    //inputun içi boşsa hataya düşür alert çıkart :)
    else{
      alert("kanka todo gir")
    }
  }


  getItems(){
    return this.model.items
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