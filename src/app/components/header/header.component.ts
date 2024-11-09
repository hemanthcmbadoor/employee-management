import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public teamSelectOption = '';
  public teamData = {
    label: '',
    placeholder: 'Choose Team',
    options: [
      {
        label: 'Product Team',
        id: 1
      },
      {
        label: 'IDC',
        id: 2
      },
      {
        label: 'OCBC',
        id: 3
      }
    ]
  };
}
