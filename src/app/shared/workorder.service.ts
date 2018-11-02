import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Workorder } from './workorder.model';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService {
  selectedWorkorder: Workorder;
  workorders: Workorder[];
  readonly baseURL = 'http://www.mocky.io/v2/5bdbe0f43300005b00813387';

  constructor(private http: HttpClient) { }
  postWorkorder(wo: Workorder) {
    return this.http.post(this.baseURL, wo);
  }
  getWorkorderList() {
    return this.http.get(this.baseURL);
  }

  putWorkorder(wo: Workorder) {
    return this.http.put(this.baseURL +`/${wo._id}`, wo);
  }
  deleteWorkorder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
