import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents = [MatButtonModule, MatSelectModule, MatFormFieldModule]

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
