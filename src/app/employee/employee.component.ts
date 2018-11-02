import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M:any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  // roles = [
  //   {id:1, value:'caller'},
  //   {id:2, value: 'analyst'}
  // ]
  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.refreshEmployeeList();
    }
    this.employeeService.selectedEmployee = {
      _id: "",
      // uname: "",
      pname: "",
      role: "",
      // joinDate:"",
      // password: ""
      // visitDate: "",
      visitDetails: "",
      doctorName: ""
    }
  }
  onSubmit(form: NgForm) {
    if(form.value._id =="") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html: 'WorkOrder Saved Successfully', classes: 'rounded'});
      });
    } else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html: 'WorkOrder Updated Successfully', classes: 'rounded'});
      });
    }
      }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee=emp;
  }
  onDelete(_id: string, form: NgForm) {
    if(confirm('Are you sure you wish to delete this record?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({html: 'WorkOrder Deleted Successfully', classes: 'rounded'});
      });
    }
  }
}
