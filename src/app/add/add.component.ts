import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddService} from "./add.service";
import {FormControl} from '@angular/forms';
import {Subscription} from "rxjs";
import {Post} from "../posts/post";
import {PostsService} from "../posts/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
})


export class AddComponent implements OnInit, OnDestroy{
  title = new FormControl('');
  posts: Post[] = [];
  postsSubscription?: Subscription;
  addSubscription?: Subscription;
  constructor(private addService: AddService, private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.getPosts().subscribe(data => this.posts = data)
  }

  ngOnDestroy() {
    this.postsSubscription?.unsubscribe();
    this.addSubscription?.unsubscribe();
  }

  addPost() {
    let newPost = {userId: 1, id: this.posts.length, title: this.title.value, completed: false}
    this.addSubscription = this.addService.addPost(this.posts, newPost).subscribe(() =>  this.router.navigateByUrl('/posts') )
  }
}
