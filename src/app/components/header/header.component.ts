import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DropDownOptionData, FilterDropDownData } from '../../modules/overview/overview.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public teamSelectOption: DropDownOptionData | undefined;
  public teamData: FilterDropDownData = {
    label: '',
    placeholder: 'Choose Team',
    options: [
      {
        label: 'Product Team',
        value: '1'
      },
      {
        label: 'IDC',
        value: '2'
      },
      {
        label: 'OCBC',
        value: '3'
      }
    ]
  };
}
