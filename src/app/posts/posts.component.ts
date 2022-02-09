import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Post} from "./post";
import {PostsService} from './posts.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';

@Component({
  selector: 'posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ["id", "userId", "title", "completed", "actions"];
  dataSource = new MatTableDataSource<Post>();
  postsSubscription?: Subscription;
  deleteSubscription?: Subscription;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsSubscription = this.postsService.getPosts().subscribe(data => this.dataSource.data = data.filter( el => el!== null));
  };

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
  }

  ngOnDestroy(): void{
    this.postsSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }

  deletePost(event: Event) {
    if (confirm("Are you sure to delete ")) {
      const elementId: string = (event.target as Element).id.split("_")[1];
      this.deleteSubscription = this.postsService.deletePost(elementId).subscribe(() => {
        let elementIndex = this.dataSource.data.findIndex(el => el.id === Number(elementId));
        this.dataSource.data.splice(elementIndex, 1);
        this.dataSource.data = [...this.dataSource.data];
      });
    }
  }


}
