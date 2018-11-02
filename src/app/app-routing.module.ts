import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WorkOrderComponent } from './work-order/work-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch:'full'
  },
  {
    path: 'workorders',
    component: WorkOrderComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

