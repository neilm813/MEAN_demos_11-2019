import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * static class properties can go here
   * static class props have hard-coded values
   * rather than values that come from the constructors params
   * this is instead of putting it in the constructor
   * as this.title = 'title';
   */
  title: string = 'public';
  // tasks = []; // without strongly typing
  tasks: any[] = [];
  activeTask = null;

  constructor(
    private _http: HttpService
  ) {}

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
}
