import { Component, OnInit } from '@angular/core';
import {todo} from '../todo'
import {todolist} from '../todolist'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor() { 
    this.loadConfig();
  }
  message:string = '';
  id:number = 1;
  todoList = todolist;
  setConfig():void{
    localStorage.setItem("Todos",JSON.stringify(this.todoList))
  }
  loadConfig(){
    this.todoList===null?localStorage.getItem("Todos"):this.todoList;  
  }
  handleBtnAdd():any{
    if(this.message===''){
       return false
    }
    this.todoList = [
      {id:this.id++,text:this.message,isComplete:false},
      ...this.todoList
    ];
    this.message = '';
    this.setConfig();
  }
  handleBtnListDel():void{
    for(let i=(this.todoList.length -1); i > -1; i--){
      if(this.todoList[i].isComplete) 
        this.todoList.splice(i,1);
    }
    this.setConfig();
  }
  handleBtnItemDel(index:number):void{
    this.todoList.splice(index,1)
    this.setConfig();
  }
  handleItemClick(todo:todo):void{
    todo = {...todo,isComplete: !todo.isComplete};
    console.log(todo,this.todoList);
  }
  ngOnInit(): void {
  }

}
