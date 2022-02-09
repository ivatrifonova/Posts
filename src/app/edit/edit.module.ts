import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EditComponent} from "./edit.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditComponent],
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],

})

export class EditModule { }
