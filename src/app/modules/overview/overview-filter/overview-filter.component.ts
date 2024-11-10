import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { avatarList, departmentList, designationList, reportManager, teamList } from '../../../data/company-data.data';
import { SharedModule } from '../../../shared/shared.module';
import { DropDownOptionData, FilterActionData, FilterDropDownData } from '../overview.model';

@Component({
  selector: 'app-overview-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './overview-filter.component.html',
  styleUrl: './overview-filter.component.scss'
})
export class OverviewFilterComponent implements OnInit{
  public departmentSelectOption: DropDownOptionData | undefined;
  public designationSelectOption: DropDownOptionData | undefined;
  public experienceSelectOption: DropDownOptionData | undefined;
  public joinYearSelectOption: DropDownOptionData | undefined;
  public teamSelectOption: DropDownOptionData | undefined;

  public readonly departmentList = departmentList;
  public readonly teamList = teamList;
  public readonly reportManager = reportManager;
  public readonly designationList = designationList;
  public readonly avatarList = avatarList;

  public departmentFilterData!: FilterDropDownData;
  public designationFilterData!: FilterDropDownData;
  public teamFilterData!: FilterDropDownData;
  public experienceFilterData!: FilterDropDownData;
  public joinYearFilterData!: FilterDropDownData;

  @Output() filterAction = new EventEmitter<FilterActionData>();

  ngOnInit(): void {
    this.setDepartmentDropdown();
    this.setDesignationDropdown();
    this.setExperienceDropdown();
    this.setJonYearDropdown();
    this.setTeamDropdown();
  }

  setDepartmentDropdown(): void {
    const transformedDepartmentList = departmentList.map(department => ({
      label: department.name,
      value: department.name
    }));
    this.departmentFilterData = {
      label: 'Department',
      placeholder: 'Select Department',
      options: transformedDepartmentList
    }
  }

  setDesignationDropdown(): void {
    const transformeDesignationList = designationList.map(des => ({
      label: des.label,
      value: des.label
    }));
    this.designationFilterData = {
      label: 'Designation',
      placeholder: 'Select Designation',
      options: transformeDesignationList
    }
  }

  setExperienceDropdown(): void {
    this.experienceFilterData = {
      label: 'Experience',
      placeholder: 'Select Experience',
      options: [
        {
          label: '5 years above',
          value: '5'
        },
        {
          label: '10 years above',
          value: '10'
        }
      ]
    }
  }

  setJonYearDropdown(): void {
    this.joinYearFilterData = {
      label: 'Year of Joining',
      placeholder: 'Select Year of Joining',
      options: [
        {
          label: '2000',
          value: '2000'
        },
        {
          label: '2001',
          value: '2001'
        },
        {
          label: '2002',
          value: '2002'
        },
        {
          label: '2003',
          value: '2003'
        },
        {
          label: '2004',
          value: '2004'
        },
        {
          label: '2005',
          value: '2005'
        },
        {
          label: '2006',
          value: '2006'
        },
        {
          label: '2007',
          value: '2007'
        },
        {
          label: '2008',
          value: '2008'
        },
        {
          label: '2009',
          value: '2009'
        },
        {
          label: '2010',
          value: '2010'
        },
        {
          label: '2011',
          value: '2011'
        },
        {
          label: '2012',
          value: '2012'
        },
        {
          label: '2013',
          value: '2013'
        },
        {
          label: '2014',
          value: '2014'
        },
        {
          label: '2015',
          value: '2015'
        },
        {
          label: '2016',
          value: '2016'
        },
        {
          label: '2017',
          value: '2017'
        },
        {
          label: '2018',
          value: '2018'
        },
        {
          label: '2019',
          value: '2019'
        },
        {
          label: '2020',
          value: '2020'
        },
        {
          label: '2021',
          value: '2021'
        },
        {
          label: '2022',
          value: '2022'
        },
        {
          label: '2023',
          value: '2023'
        },
        {
          label: '2024',
          value: '2024'
        }
      ]
    }
  }

  setTeamDropdown(): void {
    const transformTeamList = teamList.map(des => ({
      label: des.name,
      value: des.name
    }));
    this.teamFilterData = {
      label: 'Team',
      placeholder: 'Select Team',
      options: transformTeamList
    }
  }

  clear(): void {
    this.departmentSelectOption = undefined;
    this.designationSelectOption = undefined;
    this.experienceSelectOption = undefined;
    this.joinYearSelectOption = undefined;
    this.teamSelectOption = undefined;

    this.filterAction.emit({
        department: null,
        designation: null,
        experience: null,
        join_year: null,
        team: null,
        isClickedClear: true
    });
  }

  submit(): void {
    if (
      this.departmentSelectOption || 
      this.designationSelectOption || 
      this.experienceSelectOption || 
      this.joinYearSelectOption || 
      this.teamSelectOption
    ) {
      const filterData = {
        department: this.departmentSelectOption ? this.departmentSelectOption?.value : null,
        designation: this.designationSelectOption ? this.designationSelectOption?.value : null,
        experience: this.experienceSelectOption ? this.experienceSelectOption?.value : null,
        join_year: this.joinYearSelectOption ? this.joinYearSelectOption?.value : null,
        team: this.teamSelectOption ? this.teamSelectOption?.value : null,
        isClickedClear: false
      }
      this.filterAction.emit(filterData);
    }
  }
}
