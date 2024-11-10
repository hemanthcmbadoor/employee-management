import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { avatarList, departmentList, designationList, reportManager, teamList } from '../../data/company-data.data';
import { EmployeeUtilityService } from '../../services/employee-utility.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {
  public readonly teamList = teamList;
  public readonly reportManager = reportManager;
  public readonly departmentList = departmentList;
  public readonly designationList = designationList;
  public readonly avatarList = avatarList;
  
  public employeeId!: string;
  public employeeForm!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly empUtilityService = inject(EmployeeUtilityService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeId = id;
      this.setFormData(id);
    }
  }

  setFormData(id: string): void {
    const empData = this.empUtilityService.getEmployeeById(id);
    if (empData) {
      this.employeeForm = this.fb.group({
        name: [empData.name, Validators.required],
        email: [empData.email, [Validators.required, Validators.email]],
        website: [empData.website],
        contact_no: [empData.phone, Validators.required],
        designation: [empData.designation, Validators.required],
        experience: [empData.experience, [Validators.required, Validators.pattern("^[0-9]*\.?[0-9]+$"),]],
        join_date: [empData.date_of_join, Validators.required],
        team: [empData.team, Validators.required],
        report_manager: [empData.report_manager, Validators.required],
        department: [empData.department, Validators.required],
        avatar: [empData.avatar, Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.empUtilityService.updateEmployee(this.employeeForm.value, this.employeeId);
      this.router.navigate(['/overview']);
    }
  }

  cancel(): void {
    this.router.navigate(['/overview']);
  }
}
