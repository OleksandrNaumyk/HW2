import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<Comment[]>{

  constructor(private commentService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.commentService.getAllData();
  }


}
