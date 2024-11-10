import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Employee } from '../../services/employee-utility.model';
import { EmployeeUtilityService } from '../../services/employee-utility.service';
import { OverviewFilterComponent } from './overview-filter/overview-filter.component';
import { SharedModule } from '../../shared/shared.module';
import { defaultEmpData } from './overview.data';
import { Route, Router } from '@angular/router';
import { FilterActionData } from './overview.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FontAwesomeModule, OverviewFilterComponent, CommonModule, SharedModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  public isPopupVisible = false;
  public popupData: Employee = defaultEmpData;
  public employeeData: Employee[] = [];
  // private overviewServce =  inject(OverviewService);
  private readonly empUtilityService = inject(EmployeeUtilityService);
  private readonly route = inject(Router);

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData(): void {
    this.employeeData = [...this.empUtilityService.employeeData];
  }

  clickMore(action: number, item: Employee): void {
    if (action === 1) {
      //edit
      this.route.navigate(['/edit-employee', item.id]);
    } else if (action === 2) {
      //delete
      this.popupData = item;
      this.isPopupVisible = true;
    }
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  handleReturnData(data: any): void {
    //
  }

  deleteEmployee(confirm:boolean, data: Employee): void {
    if (confirm) {
      const status = this.empUtilityService.deleteEmployee(data);
      if (status) {
        this.getEmployeeData();
        this.closePopup();
      }
    } else {
      this.closePopup();
    }
  }

  filterEmit(data: FilterActionData): void {
      console.log('file', data);
      if (data.isClickedClear) {
        this.getEmployeeData();
      } else {
        this.employeeData = this.filterData(data);
      }
  }

  filterData(data: FilterActionData): Employee[] {
   return this.employeeData.filter(employee => {
      let match = true;

      const departmentFilterValue = data?.department || '';
      const designFilterValue = data?.designation || '';
      const teamFilterValue = data?.team || '';
      
      if (departmentFilterValue && !employee.department.toLowerCase().includes(departmentFilterValue?.toLowerCase())) {
          match = false;
      }

      if (designFilterValue && !employee.designation.toLowerCase().includes(designFilterValue?.toLowerCase())) {
          match = false;
      }

      if (teamFilterValue && !employee.team.toLowerCase().includes(teamFilterValue?.toLowerCase())) {
          match = false;
      }

      if (data?.join_year) {
        const dateString = employee?.date_of_join;
        const year = parseInt(dateString.split("-")[0], 10);
        if (parseFloat(data?.join_year) != year) {
          match = false;
        }
      }

      if (data?.experience) {
        if (parseFloat(data?.experience) >= parseFloat(employee?.experience)) {
          match = false;
        }
      }
      return match;
    });
  }
}
