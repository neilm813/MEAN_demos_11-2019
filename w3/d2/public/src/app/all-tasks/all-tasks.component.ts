import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._httpService.getTasks()
      .subscribe((data: any) => {
        this.tasks = data.tasks;
        console.log(data);
      });
  }

}
