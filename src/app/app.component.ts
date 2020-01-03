import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "jspiders";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyAajNCr9oGwZKWyCEuSKqYz9LZff0cZhKw",
      authDomain: "fullstack-angular-50bf1.firebaseapp.com",
      databaseURL: "https://fullstack-angular-50bf1.firebaseio.com",
      projectId: "fullstack-angular-50bf1",
      storageBucket: "fullstack-angular-50bf1.appspot.com",
      messagingSenderId: "517187619719",
      appId: "1:517187619719:web:4ef9816d377c574299e122"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
