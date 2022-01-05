import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProComponent } from './my-pro/my-pro.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';



@NgModule({
  declarations: [
    MyProComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule
  ],
  exports:[
    MyProComponent
  ]
})
export class ProjectModuleModule { }
