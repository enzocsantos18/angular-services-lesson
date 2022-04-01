import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  constructor(public classes: ClassesService) {}

  name: string;
  time: string;
  weekDate: string;

  ngOnInit() {}

  add() {
    if (!this.name || !this.time || !this.weekDate) {
      return;
    }

    this.classes.add({
      name: this.name,
      time: this.time,
      weekDate: this.weekDate,
    });
  }
}
