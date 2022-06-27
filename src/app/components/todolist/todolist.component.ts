import { Component, OnInit } from '@angular/core';
import { todo } from '../../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.loadConfig();
  }
  id: number = 1;
  message: string = '';
  todoList: todo[] = [];
  setConfig(): void {
    localStorage.setItem('Todos', JSON.stringify(this.todoList));
  }
  loadConfig() {
    this.todoList === null ? localStorage.getItem('Todos') : this.todoList;
  }
  handleBtnAdd(): any {
    // Check null input message
    if (this.message === '') {
      return false;
    }
    this.todoList = [
      { id: this.id++, text: this.message, isComplete: false },
      ...this.todoList,
    ];
    this.message = '';
    this.setConfig();
  }
  handleBtnListDel(): void {
    for (let i = this.todoList.length - 1; i > -1; i--) {
      if (this.todoList[i].isComplete) this.todoList.splice(i, 1);
    }
    this.setConfig();
  }
  handleBtnItemDel(index: number): void {
    this.todoList.splice(index, 1);
    this.setConfig();
  }
  handleItemClick(todo: todo): void {
    todo = { ...todo, isComplete: !todo.isComplete };
    this.setConfig();
    console.log(todo, this.todoList);
  }
}
