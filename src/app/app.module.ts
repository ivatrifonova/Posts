import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsService} from "./posts/posts.service";
import {HttpClientModule} from "@angular/common/http";
import {PostsModule} from "./posts/posts.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ViewModule} from "./view/view.module";
import {EditModule} from "./edit/edit.module";
import {AddModule} from "./add/add.module";
import {ReactiveFormsModule} from '@angular/forms';
import {PostsRoutingModule} from "./posts/posts-routing.module";
import {AddRoutingModule} from "./add/add-routing.module";
import {EditRoutingModule} from "./edit/edit-routing.module";
import {ViewRoutingModule} from "./view/view-routing.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsRoutingModule,
    AddRoutingModule,
    ViewRoutingModule,
    EditRoutingModule,
    HttpClientModule,
    PostsModule,
    NoopAnimationsModule,
    ViewModule,
    EditModule,
    AddModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
