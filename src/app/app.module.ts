import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {BlogService} from './blog.service'
@NgModule({
  declarations: [
    AppComponent,
    routingComponent //Navigation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // using for HTTP fetch data
    AppRoutingModule //Navigation
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
