import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/add', component: BlogFormComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  HomepageComponent,
  TodolistComponent,
  BlogComponent,
  BlogDetailComponent,
];
