import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-overview-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './overview-filter.component.html',
  styleUrl: './overview-filter.component.scss'
})
export class OverviewFilterComponent {
  public departmentSelectOption = '';
  public rollTypeSelectOption = '';
  public designationSelectOption = '';
  public experienceSelectOption = '';
  public joinYearSelectOption = '';
  public locationSelectOption = '';
  public teamSelectOption = '';

  public sample = {

  };
  public filterApplyData = {
    department: {
      label: 'Department',
      placeholder: 'Select Department',
      options: [
        {
          label: 'Front End Development',
          id: 1
        },
        {
          label: 'ML Engineering',
          id: 2
        }
      ]
    },
    rollType: {
      label: 'Roll Type',
      placeholder: 'Select Roll Type',
      options: [
        {
          label: 'FullTime',
          id: 3
        },
        {
          label: 'Contract',
          id: 4
        }
      ]
    },
    designation: {
      label: 'Designation',
      placeholder: 'Select Designation',
      options: [
        {
          label: 'Senior UI Developer',
          id: 5
        },
        {
          label: 'Senior Backend Developer',
          id: 6
        }
      ]
    },
    experience: {
      label: 'Experience',
      placeholder: 'Select Experience',
      options: [
        {
          label: '5 years above',
          id: 7
        },
        {
          label: '10 years above',
          id: 8
        }
      ]
    },
    joinYear: {
      label: 'Year of Joining',
      placeholder: 'Select Year of Joining',
      options: [
        {
          label: '2019',
          id: 9
        },
        {
          label: '2020',
          id: 10
        }
      ]
    },
    location: {
      label: 'Location',
      placeholder: 'Select Location',
      options: [
        {
          label: 'Bangalore',
          id: 11
        },
        {
          label: 'Ernakulam',
          id: 12
        }
      ]
    },
    team: {
      label: 'Team',
      placeholder: 'Select Team',
      options: [
        {
          label: 'OCRC Bangalore',
          id: 13
        },
        {
          label: 'Google',
          id: 14
        }
      ]
    }
  }
}
