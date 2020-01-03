import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  // employee = [
  //   {
  //     emp_id: 1,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500__340.jpg",
  //     emp_name: "THALA",
  //     emp_designation: "NODEJS DEVELOPER",
  //     emp_salary: 40000,
  //     emp_location: "MUMBAI",
  //     emp_education: "BE",
  //     emp_doj: new Date("10/10/2015")
  //   },
  //   {
  //     emp_id: 2,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2019/01/24/18/14/man-3953040__340.jpg",
  //     emp_name: "MANU",
  //     emp_designation: "JAVA DEVELOPER",
  //     emp_salary: 20000,
  //     emp_location: "MYSORE",
  //     emp_education: "BTECH",
  //     emp_doj: new Date("10/12/2015")
  //   }
  // ];
  // ImageURL =
  //   "https://cdn.pixabay.com/photo/2019/11/13/12/35/anise-4623554__340.png";
  // isActive = false;
  // colSpan = 10;
  // click(x) {
  // alert("hello Angular here");
  // console.log(event);
  // console.log(x);
  // }
  // username(e) {
  //   if (e.keycode == 13) {
  //     console.log(e.target.value);
  //   }
  // }
  // username(e) {
  //   console.log(e.target.value);
  // }
  // enterEmail(email) {
  //   console.log(email.target.value);
  // }
  getUsername(username) {
    console.log(username);
  }
  getNumber(number) {
    console.log(number);
  }
  getEmail(email) {
    console.log(email);
  }
  constructor() {}

  ngOnInit() {
    //javascript way
    // var input = document.querySelector("input");
    // input.addEventListener("keyup", e => {
    //   console.log(e.target.value);
    // });
  }
}
