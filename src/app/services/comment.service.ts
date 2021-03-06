import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<Comment[]>  {
    return this.httpClient.get<Comment[]>(this.API + 'comments');
  }
}
