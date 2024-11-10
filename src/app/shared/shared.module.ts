import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoreDropdownComponent } from './more-dropdown/more-dropdown.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownComponent,
    FontAwesomeModule,
    MoreDropdownComponent,
    PopupComponent
  ],
  exports: [
    DropdownComponent,
    FontAwesomeModule,
    MoreDropdownComponent,
    PopupComponent
  ]
})
export class SharedModule { }
