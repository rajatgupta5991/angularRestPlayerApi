import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  log(username) {
    console.log(username.value);
  }
  submit(form) {
    console.log(form.value);
  }
  getObj(username) {
    console.log(username.value);
  }
}
