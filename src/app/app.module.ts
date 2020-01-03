import { CustomDirective } from "./custom.directive";
import { coursesComponent } from "./COURSES/courses.component";
import { QspidersComponent } from "./jspiders.components";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";

//to use restfull api in angular first import httpClientModule from @angular/common/http
import { HttpClientModule } from "@angular/common/http";

//import router module
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { MyntraComponent } from "./myntra/myntra.component";
import { SimpleComponent } from "./simple/simple.component";
import { ContactComponent } from "./contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { ApiComponent } from "./api/api.component";
import { PlayerComponent } from "./player/player.component";

@NgModule({
  declarations: [
    AppComponent,
    QspidersComponent,
    coursesComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UsersComponent,
    MyntraComponent,
    SimpleComponent,
    CustomDirective,
    CustomDirective,
    ContactComponent,
    StudentsComponent,
    ApiComponent,
    PlayerComponent
  ], //register in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "api", component: ApiComponent },
      { path: "**", component: PagenotfoundComponent } //404 page not found
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
