import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {

  authors: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getAuthors()
      .subscribe((data: any) => {
        this.authors = data.authors;
      });
  }

  editAuthor(authorId: string) {
    this._router.navigate(['/edit/', authorId]);
  }

  deleteAuthor(authorId: string) {
    this._httpService.deleteAuthor(authorId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.authors.length; i++) {
          if (this.authors[i]._id === authorId) {
            return this.authors.splice(i, 1);
          }
        }
      });
  }
}
