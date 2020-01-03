import { Component, OnInit } from "@angular/core";
// import { NgForm } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators, usernameValidators } from "../name.validators";
// import * as firebase from "firebase";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  // submit(form: NgForm) {
  //   const username = form.value.username;
  //   const password = form.value.password;
  //   console.log(username, password);
  //   firebase
  //     .database()
  //     .ref("/fullstackusers")
  //     .set({ username: username, password: password }); //it is cooming rom firebase documentation
  // }

  constructor() {}
  // to create reactive form we have to import formGroup class and formControl class from @angular/form
  form = new FormGroup({
    //we need to create form control instance...
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern("jspiders"),
      CustomValidators.removeSpace,
      usernameValidators.pleaseDontUseAtTheRate
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("rajat")
    ])
  });

  get username() {
    return this.form.get("username");
  } //getter
  get password() {
    return this.form.get("password");
  } //getter
  ngOnInit() {}
}
