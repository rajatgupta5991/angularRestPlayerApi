import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  form = new FormGroup({
    StudentList: new FormArray([])
  });
  get GetStudents() {
    return this.form.get("StudentList");
  }
  constructor() {}

  addStudents(student) {
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }
  removeStudent(student: FormControl) {
    let index = (this.GetStudents as FormArray).controls.indexOf(student);
    (this.GetStudents as FormArray).removeAt(index);
  }

  ngOnInit() {}
}
