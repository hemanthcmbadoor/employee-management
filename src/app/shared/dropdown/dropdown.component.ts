import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropDownOptionData, FilterDropDownData } from '../../modules/overview/overview.model';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  isDropdownOpen = false;

  @Input() isShowBorder = true;
  @Input() selectedOption: DropDownOptionData | undefined;
  @Input() dropDownData!: FilterDropDownData;
  @Output() selectedOptionChange = new EventEmitter<DropDownOptionData>();

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: DropDownOptionData) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.selectedOptionChange.emit(option);
  }
}
