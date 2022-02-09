import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from "../base-service";
import {Post} from "./post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super(http);
  }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + ".json")
  }

  deletePost(id: string): Observable<any>{
    return this.http.delete(this.url + `/${id}.json`);
  }
}
