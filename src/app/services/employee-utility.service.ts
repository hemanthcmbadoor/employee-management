import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee, FormEmployee } from './employee-utility.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUtilityService {

  public employeeData: Employee[] = [];

  private readonly toaster = inject(ToastrService);
  
  addNewEmployee(data: FormEmployee): void {
    const empId = Math.floor(Math.random() * 1000000).toString();
    const empData: Employee = {
      id: empId,
      name: data.name,
      designation: data.designation,
      email: data.email,
      avatar: data.avatar,
      phone: data.contact_no,
      website: data.website,
      experience: data.experience,
      date_of_join: data.join_date,
      team: data.team,
      report_manager: data.report_manager,
      department: data.department
    };
    this.employeeData = [...this.employeeData, empData];
    this.toaster.success('New employee created', 'Success');
  }

  updateEmployee(data: FormEmployee, empId: string): void {
    const index = this.employeeData.findIndex(emp => emp.id == empId);
    
    if (index >= 0) {
      this.employeeData[index].name = data.name;
      this.employeeData[index].designation = data.designation;
      this.employeeData[index].email = data.email;
      this.employeeData[index].avatar = data.avatar;
      this.employeeData[index].phone = data.contact_no
      this.employeeData[index].website = data.website;
      this.employeeData[index].experience = data.experience;
      this.employeeData[index].date_of_join = data.join_date;
      this.employeeData[index].team = data.team;
      this.employeeData[index].report_manager = data.report_manager
      this.employeeData[index].department = data.department
      this.employeeData = [...this.employeeData];
      this.toaster.success('Employee data updated', 'Success');
    }
  }

  deleteEmployee(data: Employee): boolean {
    const index = this.employeeData.findIndex(emp =>  emp?.id == data?.id);
    if (index >= 0) {
      this.employeeData.splice(index, 1);
      this.toaster.success('Employee deleted', 'Success');
    }
    return true;
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.employeeData.find(emp => emp?.id == id);
  }
}
