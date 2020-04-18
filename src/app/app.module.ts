import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { HelloComponent } from './components/hello/hello.component';
import {UserResolverService} from './services/resolver/user-resolver.service';
import {PostResolverService} from './services/resolver/post-resolver.service';
import {CommentResolverService} from './services/resolver/comment-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/single-components/user/user.component';
import { PostComponent } from './components/single-components/post/post.component';
import { CommentComponent } from './components/single-components/comment/comment.component';

const routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {list: UserResolverService}},
  {path: 'posts', component: AllPostsComponent, resolve: {list: PostResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {list: CommentResolverService}}
  ];

function forRoute() {
  return undefined;
}

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    HelloComponent,
    UserComponent,
    PostComponent,
    CommentComponent


  ],
  imports: [
    BrowserModule,
    RouterModule, forRoute()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
