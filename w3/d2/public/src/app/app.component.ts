import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { Router } from '@angular/router';

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
  activeTask = null;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
}
