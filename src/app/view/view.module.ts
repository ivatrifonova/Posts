import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ViewComponent} from "./view.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [ViewComponent],
    imports: [CommonModule, MatCardModule],
})

export class ViewModule { }
