import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../../models/Post';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllData();
  }

}
