import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpInterceptorServiceService } from './services/http-interceptor-service.service';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent, //routing
    BlogFormComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Form controller
    HttpClientModule, // using HTTP for fetching data
    AppRoutingModule, //Navigation
  ],
  providers: [
    BlogService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
