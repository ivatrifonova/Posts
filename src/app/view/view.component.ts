import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../posts/post";
import {Router} from '@angular/router';
import {ViewService} from "./view.service";
import {PostsService} from "../posts/posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'view-component',
  templateUrl: './view.component.html',
})


export class ViewComponent implements OnInit, OnDestroy {
  post?: Post;
  postSubscription?: Subscription;

  constructor(private postsService: PostsService, private viewService: ViewService, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.router.url.split("/post/")[1];
      this.postSubscription = this.viewService.getPost(id).subscribe((data: Post) => {
        this.post = data;
      })
    }

    ngOnDestroy():void {
      this.postSubscription?.unsubscribe()
    }

  }
