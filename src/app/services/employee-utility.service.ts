import { inject, Injectable } from '@angular/core';
import { Employee, FormEmployee } from './employee-utility.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUtilityService {

  public employeeData: Employee[] = [ 
    {
        "id": "1",
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "experience": "5.9",
        "designation": "Software Developer",
        "avatar": "assets/profile/avatar8.jpg",
        "date_of_join": "2020-11-09",
        "team": "Product Team",
        "report_manager": "Natasha",
        "department": "Front End Development"
    },
    {
        "id": "2",
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.org",
        "experience": "4.9",
        "designation": "Senior Software Developer",
        "avatar": "assets/profile/avatar3.webp",
        "date_of_join": "2020-10-09",
        "team": "IDC",
        "report_manager": "Tony Stark",
        "department": "ML Engineering"
    },
    {
        "id": "3",
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "experience": "3.3",
        "designation": "Technical Lead",
        "avatar": "assets/profile/avatar1.avif",
        "date_of_join": "2020-10-01",
        "team": "Radian",
        "report_manager": "Chandler Bing",
        "department": "ML Engineering"
    },
    {
        "id": "4",
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "1-770-736-8031 x56442",
        "website": "kale.biz",
        "experience": "1.9",
        "designation": "Software Developer",
        "avatar": "assets/profile/avatar8.jpg",
        "date_of_join": "2019-04-12",
        "team": "Manager",
        "report_manager": "Lalit Agarwal",
        "department": "ML Engineering"
    },
    {
        "id": "5",
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "experience": "7",
        "designation": "Quality Assurance",
        "avatar": "assets/profile/avatar5.jpg",
        "date_of_join": "2019-03-12",
        "team": "Product Team",
        "report_manager": "Natasha",
        "department": "ML Engineering"
    }
  ];

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
    console.log(index);
    
    if (index >= 0) {
      this.employeeData.splice(index, 1);
      this.toaster.success('Employee deleted', 'Success');
    }
    return true;
  }

  getEmployeeById(id: string): Employee | undefined {
    console.log(id);
    
    return this.employeeData.find(emp => emp?.id == id);
  }
}
