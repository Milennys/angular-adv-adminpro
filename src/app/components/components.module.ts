import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { IncrementComponent } from './increment/increment.component';
import { DonutComponent } from './donut/donut.component';



@NgModule({
  declarations: [IncrementComponent, DonutComponent],
  exports: [IncrementComponent, DonutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
