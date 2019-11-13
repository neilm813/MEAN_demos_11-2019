import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getAuthors() {
    // longform
    const observable = this._http.get('/api/authors');
    return observable;
  }

  getAuthor(id) {
    return this._http.get('/api/authors/' + id);
  }

  createAuthor(newAuthor) {
    return this._http.post('/api/authors', newAuthor);
  }

  updateAuthor(id, editedAuthor) {
    return this._http.put('/api/authors/' + id, editedAuthor);
  }

  deleteAuthor(id) {
    return this._http.delete('/api/authors/' + id);
  }
}
