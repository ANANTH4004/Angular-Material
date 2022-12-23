import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
const MaterialModules : any[] = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];


@NgModule({

  imports: [
    MaterialModules
  ],
  exports:[
    MaterialModules
  ]
})
export class MaterialModule { }
