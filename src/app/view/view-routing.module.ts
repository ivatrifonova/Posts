import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./view.component";

const routes: Routes = [
  { path: "post/:id",
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
