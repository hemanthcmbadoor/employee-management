import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  isDropdownOpen = false;
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  // selectedOption = '';

  @Input() isShowBorder = true;
  @Input() selectedOption: any;
  @Input() dropDownData: any;
  @Output() selectedOptionChange = new EventEmitter<any>();

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: any) {
    console.log(option);
    
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.selectedOptionChange.emit(option);
  }
}
