import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  @Input() taskToShow;
  @Input() appTitle: string;
  
  constructor() { }

  ngOnInit() {
  }

}
