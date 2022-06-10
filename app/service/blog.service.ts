import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
const urlAPI = 'https://62a05057a9866630f80b9525.mockapi.io/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${urlAPI}`);
  }
  // find():Observable<Blog>{
  //   return this.http.
}
