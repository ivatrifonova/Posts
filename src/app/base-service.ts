import {HttpClient} from "@angular/common/http";

export class BaseService {
  constructor(protected httpClient: HttpClient) {
    this.url = 'https://posts-51f86-default-rtdb.europe-west1.firebasedatabase.app/posts'
  }

  url: string;
}
