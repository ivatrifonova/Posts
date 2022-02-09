import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from "../base-service";
import {Observable} from "rxjs";
import {Post} from "../posts/post";

@Injectable({
  providedIn: 'root'
})
export class ViewService extends BaseService {
  constructor(
    private http: HttpClient
  ) {
    super(http)
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.url + `/${id}.json`);
  }
}
