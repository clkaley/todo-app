import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';
//import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  
  constructor() {
    this.model.items=this.getItemsFromLocalStorage()
   }

  model=new Model();

  displayAll:boolean=false;

  inputText:string="";

  addItem(){
    //inputun içi boş değilse listeye ekle
    if(this.inputText!==""){
      let data={
        description:this.inputText,action:false
      }
      console.log("inputta ne var:",this.inputText);
      this.model.items.push(data);
      //!localStorage içinde sadece string bilgi saklanabiliyor
      //!dizi olulturduk çünkü dizi oluşturmadığımızda her eklene data için ekleniyor ama eski data tutulmuyor bu sebeple array oluşturup hepsini ona eklicez
      let items=this.getItemsFromLocalStorage();
      items.push(data);
      localStorage.setItem("todos",JSON.stringify(items));
      this.inputText="";
    }
    //inputun içi boşsa hataya düşür alert çıkart :)
    else{
      alert("kanka todo gir")
    }
  }

  getItemsFromLocalStorage(){
    let items:TodoItem[]=[];
    let value=localStorage.getItem("todos");
    if(value!=null){
      items=JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item:TodoItem){
    //!localstorage daki bilgiler alındı.
    let items=this.getItemsFromLocalStorage();
    localStorage.clear();
    items.forEach(i=>{
      if(i.description==item.description){
        i.action=item.action;
      }
    })
    console.log(item);
    localStorage.setItem("todos",JSON.stringify(items));
    
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

  getBtnClasses(){
    return {
      disabled :  this.inputText.length==0 ,
      'btn-secondary' :this.inputText.length==0 ,
      'btn-primary' :this.inputText.length>0
    }
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