import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTask = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  handleTaskSubmit() {
    this._httpService.createTask(this.newTask)
      .subscribe((data: any) => {

        // reset the form inputs to blank
        this.newTask = {
          title: '',
          description: '',
          completed: false,
        };

        this._router.navigate([data.newTask._id]);
      });
  }

}
