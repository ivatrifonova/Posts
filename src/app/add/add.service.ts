import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../base-service";
import {Observable} from "rxjs";
import {Post} from "../posts/post";

@Injectable({
  providedIn: 'root'
})
export class AddService extends BaseService {

  constructor(
    private http: HttpClient,

  ) {
    super(http);
  }

  addPost(posts: Post[], post: Post): Observable<void> {
    const newPosts  = [...posts, post]
    return this.http.put<void>(this.url + `.json`, newPosts);
  }
}
