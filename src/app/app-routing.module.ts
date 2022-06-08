import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import { TodolistComponent} from './todolist/todolist.component'
import {BlogComponent} from './blog/blog.component'
const routes:Routes = [
  {path:"blog",component:BlogComponent},
  {path:"todo",component:TodolistComponent},
  {path: 'home', component:HomepageComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponent = [HomepageComponent,TodolistComponent,BlogComponent]

