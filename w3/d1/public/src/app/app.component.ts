import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * class properties that don't rely on constructor params go here
   * this is instead of putting it in the constructor
   * as this.title = 'title';
   */
  title: string = 'cool app, bro';
  // tasks = []; // without strongly typing
  tasks: any[] = [];
  activeTask = null;

  newTask = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this._http.getTasks()
      .subscribe((data: any) => {
        this.tasks = data.tasks;
        console.log(data);
      });
  }

  setActiveTask(selectedTask) {
    this.activeTask = selectedTask;
    console.log(this.activeTask);
  }

  handleTaskSubmit() {
    this._http.createTask(this.newTask)
      .subscribe((data: any) => {
        this.tasks.push(data.newTask);

        this.newTask = {
          title: '',
          description: '',
          completed: false,
        };
      });
  }
}
