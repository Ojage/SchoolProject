import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from "../student";

@Component({
  selector: 'app-dashboardview',
  templateUrl: './dashboardview.component.html',
  styleUrls: ['./dashboardview.component.css']
})
export class DashboardviewComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents():void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students.slice(1,5));
  }
}
