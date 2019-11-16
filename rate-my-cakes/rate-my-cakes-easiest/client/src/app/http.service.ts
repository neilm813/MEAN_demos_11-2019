import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // http service super simple returns all observables

  getAll() {
    return this.http.get('/api/cakes');
  }

  getOne(id) {
    return this.http.get(`/api/cakes/${id}`);
  }

  create(data) {
    return this.http.post('/api/cakes', data);
  }

  addReview(id, data) {
    return this.http.put(`/api/cakes/${id}`, data);
  }
}
