import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: any = [
    {
      name: "Rajat",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      id: 1,
      designation: "SoftwareDeveloper",
      doj: "25/10/2019",
      education: "Graduate",
      dob: "25/10/1995",
      companyName: "LifeMatters",
      salary: 2500000000,
      location: "Delhi"
    },
    {
      name: "Raja",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      id: 2,
      designation: "SoftwareDeveloper",
      doj: "25/10/2019",
      education: "Graduate",
      dob: "5/10/1995",
      companyName: "LifeMatters",
      salary: 2500000000,
      location: "Delhi"
    },
    {
      name: "Raj",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      id: 3,
      designation: "SoftwareDeveloper",
      doj: "2/10/2019",
      education: "Gradsuate",
      dob: "25/1/1995",
      companyName: "LifeMatters",
      salary: 2500000000,
      location: "Delhi"
    },
    {
      name: "Rajath",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      id: 4,
      designation: "SoftwareDeveloper",
      doj: "20/10/2019",
      education: "Graduate",
      dob: "25/10/1996",
      companyName: "LifeMatters",
      salary: 2500000000,
      location: "Delhi"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
