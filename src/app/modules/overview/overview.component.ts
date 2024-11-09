import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewFilterComponent } from './overview-filter/overview-filter.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FontAwesomeModule, OverviewFilterComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
