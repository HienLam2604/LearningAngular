import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import { TodolistComponent} from './todolist/todolist.component'
import {BlogComponent} from './blog/blog.component'
import {BlogDetailComponent} from './blog-detail/blog-detail.component'
const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"blog",component:BlogComponent},
  {path:"blog/:id",component:BlogDetailComponent},
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
export const routingComponent = [HomepageComponent,TodolistComponent,BlogComponent,BlogDetailComponent]

