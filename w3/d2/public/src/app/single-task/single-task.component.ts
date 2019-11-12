import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  task: any = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getTask(params.id)
        .subscribe((data: any) => {

          if (data.hasOwnProperty('error')) {
            return this._router.navigate(['page/not/found']);
          }
          else { // no errors
            this.task = data.task;
          }
        });
    });
  }

}
