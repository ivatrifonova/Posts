import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddComponent} from "./add.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddComponent],
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],

})

export class AddModule { }
