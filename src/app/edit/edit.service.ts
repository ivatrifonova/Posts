import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../base-service";
import {Observable} from "rxjs";
import {Post} from "../posts/post";


@Injectable({
  providedIn: 'root'
})
export class EditService extends BaseService{

  constructor(
    private http: HttpClient
  ) {
    super(http);
  }

  editPost(id:string, post: Post):Observable<Post> {
    return this.http.put<Post>(`${this.url}/${id}.json`,post);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.url + `/${id}.json`);
  }
}
