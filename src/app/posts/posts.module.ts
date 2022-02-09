import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PostsComponent} from "./posts.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, RouterModule],
  exports: [PostsComponent]

})

export class PostsModule { }
