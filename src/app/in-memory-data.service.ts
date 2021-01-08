import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 10, matricule: "UB21A111", name: 'Arrey Tarnop'},
      { id: 11, matricule: "UB21A112", name: 'Nate Jay' },
      { id: 13, matricule: "UB21A113", name: 'Gary Fisher' },
      { id: 14, matricule: "UB21A114", name: 'Usman Abrahim' },
      { id: 15, matricule: "UB21A115", name: 'Larry Oben' },
      { id: 16, matricule: "UB21A116", name: 'Ako MaryJane' },
      { id: 17, matricule: "UB21A117", name: 'Ryan Gosling' },
      { id: 18, matricule: "UB21A118", name: 'Fuanyi Orion' },
      { id: 19, matricule: "UB21A119", name: 'Obi Dora' },
      { id: 20, matricule: "UB21A110", name: 'Egbe Nixon' }
    ];
    return {students};
  }

  // Overrides the genId method to ensure that a hero always has an matricule.
  // If the students array is empty,
  // the method below returns the initial string (11).
  // if the heroes array is not empty, the method below returns the highest
  // student id + 1.
  genId(students: Student[]): Number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}