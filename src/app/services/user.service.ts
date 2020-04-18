import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {

  }

  getAllData(): Observable<User[]>  {
    return this.httpClient.get<User[]>(this.API + 'users');
  }

}
