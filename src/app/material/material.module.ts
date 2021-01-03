import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule, MatIconModule } from '@angular/material';

const MATERIAL_MODULE = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule
]
@NgModule({
  imports: [
    MATERIAL_MODULE
  ],
  exports:[
    MATERIAL_MODULE
  ]
})
export class MaterialModule { 
  
}
