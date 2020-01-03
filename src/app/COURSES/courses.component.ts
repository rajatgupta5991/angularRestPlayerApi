import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "courses", //component name
  //render template
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent {
  //to use service or DI constructor
  //dependency injection
  constructor(private http: HttpClient) {
    this.http.get("http://api.github.com/users").subscribe(user => {
      console.log(user);
    }); //angular httpClient
  }
  ngOnInIt() {
    window
      .fetch("http://api.github.com/users")
      .then(data => {
        data
          .json()
          .then(info => {
            console.log(info);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err)); //javascript fetch method
  } //closing oninit method

  // languages = [
  //   "expressjs",
  //   "java",
  //   "python",
  //   "nodejs",
  //   "ruby",
  //   "angular",
  //   "react"
  // ];
  // users = [
  //   {
  //     name: "manu",
  //     photo:
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  //     age: 20,
  //     company: "testyantra",
  //     salary: 25000,
  //     designation: "webDev",
  //     location: "bang",
  //     gender: "male",
  //     education: "b.tech"
  //   },
  //   {
  //     name: "mark",
  //     photo:
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  //     age: 21,
  //     company: "google",
  //     salary: 250000,
  //     designation: "softDev",
  //     location: "mumbai",
  //     gender: "male",
  //     education: "b.tech"
  //   },
  //   {
  //     name: "varun",
  //     photo:
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  //     age: 22,
  //     company: "yantra",
  //     salary: 22000,
  //     designation: "webDev",
  //     location: "mang",
  //     gender: "male",
  //     education: "b.tech"
  //   },
  //   {
  //     name: "gyanchand",
  //     photo:
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  //     age: 25,
  //     company: "yantraMgic",
  //     salary: 25000000,
  //     designation: "webDev and softDev",
  //     location: "delhi",
  //     gender: "male",
  //     education: "b.tech, m.tech"
  //   }
  // ];
  // addNweUser() {
  //   this.users.unshift({
  //     name: "bhai",
  //     photo:
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  //     age: 25,
  //     company: "yantraMgic",
  //     salary: 25000000,
  //     designation: "webDev and softDev",
  //     location: "delhi",
  //     gender: "male",
  //     education: "b.tech, m.tech"
  //   });
  //   // this.users.push();
  // }
  // removeUser(user) {
  //   let index = this.users.indexOf(user);
  //   this.users.splice(index, 1);
  // }
}
