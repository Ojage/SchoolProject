import { Component, OnInit } from '@angular/core';

import { Student } from "../student";
import { StudentService } from "../student.service";
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  students!: Student[];

  constructor(private StudentService: StudentService) { }

  ngOnInit() {
    this.getstudents();
  }

  getstudents(): void {
    this.StudentService.getStudents()
    .subscribe(data => this.students = data);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.StudentService.addStudent({ name } as Student)
      .subscribe((Student: Student) => {
        this.students.push(Student);
      });
  }

  delete(Student: Student): void {
    this.students = this.students.filter(h => h !== Student);
    this.StudentService.deleteStudent(Student).subscribe();
  }


}
