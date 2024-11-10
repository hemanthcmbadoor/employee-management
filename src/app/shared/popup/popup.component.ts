import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Popup Title';
  @Output() popupClose = new EventEmitter<void>();

  closePopup() {
    this.isVisible = false;
    this.popupClose.emit();
  }
}
