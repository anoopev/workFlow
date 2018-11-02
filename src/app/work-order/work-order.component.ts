import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkorderService } from '../shared/workorder.service';
import { Workorder } from '../shared/workorder.model';

declare var M:any;

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css'],
  providers: [WorkorderService]
})
export class WorkOrderComponent implements OnInit {

  constructor(private workorderService: WorkorderService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshWorkorderList();
  }
  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.refreshWorkorderList();
    }
    this.workorderService.selectedWorkorder ={
      _id: "",
      pname: "",
      doctorName: "",
      visitDetails: ""
    }
  }
  onSubmit(form: NgForm) {
    // if(form.value._id =="") {
      this.workorderService.postWorkorder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshWorkorderList();
        M.toast({html: 'WorkOrder Imported Successfully', classes: 'rounded'});
      // });
    // } else {
    //   this.workorderService.putWorkorder(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshWorkorderList();
    //     M.toast({html: 'WorkOrder Edited Successfully', classes: 'rounded'});
      });
    }
      
  refreshWorkorderList() {
    this.workorderService.getWorkorderList().subscribe((res) => {
      this.workorderService.workorders = res as Workorder[];
    });
  
  // onEdit(wo: Workorder) {
  //   this.workorderService.selectedWorkorder=wo;
  // }
  // onDelete(_id: string, form: NgForm) {
  //   if(confirm('Are you sure you wish to delete this workorder?') == true) {
  //     this.workorderService.deleteWorkorder(_id).subscribe((res) => {
  //       this.refreshWorkorderList();
  //       this.resetForm(form);
  //       M.toast({html: 'WorkOrder Deleted', classes: 'rounded'});
  //     });
  //   }
  }}