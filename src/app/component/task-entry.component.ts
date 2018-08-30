import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {
   
  priority: string[] = ["low", "medium", "high"]

  constructor() { }

  ngOnInit() {
  }

  addTask(form: NgForm) {
    console.log('form: ', form.value);
    form.reset();
  }
}
