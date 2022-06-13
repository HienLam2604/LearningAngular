import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {BlogService} from './services/blog.service';
import { BlogFormComponent } from './components/blog-form/blog-form.component'
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    BlogFormComponent, //Navigation
  ],
  imports: [
    BrowserModule,
    FormsModule, // Form controller
    HttpClientModule, // using HTTP for fetching data
    AppRoutingModule //Navigation
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
