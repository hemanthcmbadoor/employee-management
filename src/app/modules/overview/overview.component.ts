import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewFilterComponent } from './overview-filter/overview-filter.component';
import { OverviewService } from './overview.service';
import { Employee } from './overview.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FontAwesomeModule, OverviewFilterComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  public employeeData: Employee[] = [];
  private overviewServce =  inject(OverviewService);

  ngOnInit(): void {
    this.overviewServce.getEmployeeData().subscribe((data: Employee[]) => {
      this.employeeData = data;
    })
  }
}
