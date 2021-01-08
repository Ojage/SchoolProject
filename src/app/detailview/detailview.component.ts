
/**
 * The DetailviewComponent needs a new 
 * way to obtain the student-to-display. This section explains the following:

1)Get the route that created it
2)Extract the matricule from the route
3)Acquire the student with that matricule from the server via the StudentService
 */
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StudentService } from '../student.service';
@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  SpecificStudent!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
    
  }

  getStudent(): void {
      const id = + this.route.snapshot.paramMap.get('id');
      this.studentService.getStudent(id)
        .subscribe(student => this.SpecificStudent = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.SpecificStudent)
      .subscribe(() => this.goBack());
  }
}
