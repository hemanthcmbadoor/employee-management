import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { avatarList, departmentList, designationList, reportManager, teamList } from '../../data/company-data.data';
import { EmployeeUtilityService } from '../../services/employee-utility.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  public readonly teamList = teamList;
  public readonly reportManager = reportManager;
  public readonly departmentList = departmentList;
  public readonly designationList = designationList;
  public readonly avatarList = avatarList;

  public employeeForm!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly empUtilityService = inject(EmployeeUtilityService);

  ngOnInit(): void {
    this.setFormData();
  }

  setFormData(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      website: [''],
      contact_no: ['', Validators.required],
      designation: ['', Validators.required],
      experience: ['', [Validators.required, Validators.pattern("^[0-9]*\.?[0-9]+$"),]],
      join_date: ['', Validators.required],
      team: ['', Validators.required],
      report_manager: ['', Validators.required],
      department: ['', Validators.required],
      avatar: [this.avatarList[0].path, Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.empUtilityService.addNewEmployee(this.employeeForm.value);
      this.setFormData();
    }
  }
}
