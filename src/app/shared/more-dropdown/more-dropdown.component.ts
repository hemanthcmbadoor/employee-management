import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-more-dropdown',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './more-dropdown.component.html',
  styleUrl: './more-dropdown.component.scss'
})
export class MoreDropdownComponent {
  isDropdownOpen = false;
  @Output() changeAction = new EventEmitter<number>();
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: number) {
    this.isDropdownOpen = false;
    this.changeAction.emit(option);
  }
}
