import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getTasks() {
    const observable = this._http.get('/api/tasks');
    return observable;

    // shorthand
    // return this._http.get('/api/tasks');
  }

  createTask(newTask) {
    // return the observable that _http.post returns
    return this._http.post('/api/tasks', newTask);
  }
}
