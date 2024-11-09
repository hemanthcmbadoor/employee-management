import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownComponent,
    FontAwesomeModule
  ],
  exports: [
    DropdownComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
