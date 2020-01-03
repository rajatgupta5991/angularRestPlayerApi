import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  users = [
    {
      name: "Raj",
      age: 5,
      gender: "male",
      country: "nicobar"
    },
    {
      name: "Rajkumar",
      age: 55,
      gender: "female",
      country: "äfrica"
    },
    {
      name: "kumar",
      age: 51,
      gender: "male",
      country: "äfganistan"
    },
    {
      name: "zeher",
      age: 0,
      gender: "female",
      country: "jahannum"
    }
  ];

  // users = ["rajat", "boss", "beingBoss", "rajatBoss"];
  // toggleClass = false;
  // toggleState() {
  //   this.toggleClass = !this.toggleClass;
  //   console.log("click event is working here");
  // }
  // addDynamicClass() {
  //   return {
  //     "bg-success": true,
  //     "text-white": true,
  //     "mt-2": true,
  //     "mb-2": true,
  //     background: this.toggleClass
  //   };
  // }
  // dynamicCss() {
  //   return {
  //     "bg-danger": true,
  //     color: "text-light",
  //     background: this.toggleClass
  //   };
  // }
  constructor() {}

  ngOnInit() {}
}
