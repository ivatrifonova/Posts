import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../posts/post";
import {EditService} from "./edit.service";
import { Router } from '@angular/router';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'edit-component',
  templateUrl: './edit.component.html',
})

export class EditComponent implements OnInit, OnDestroy{
  title = new FormControl('');
  post?: Post;
  id?: string;
  postSubscription?: Subscription;
  editSubscription?: Subscription;

  constructor(private editService: EditService, private router: Router) { }

  ngOnInit(): void {
     this.id = this.router.url.split("/edit/")[1];
     this.postSubscription = this.editService.getPost(this.id).subscribe((data: Post) => {
      this.post = data;
      this.title.setValue(data.title);
    })
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe()
    this.editSubscription?.unsubscribe()
  }

  editPost(): void {
    if(this.post && this.id) {
      this.post.title = this.title.value;
      this.editSubscription =  this.editService.editPost(this.id, this.post).subscribe(() =>  this.router.navigateByUrl('/posts') )
    }
  }
}
