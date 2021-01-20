import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  launchSuccess = '';
  landSuccess = '';
  launchYear = '';
  getdata() {
    console.log(environment.getSpacexData + this.launchSuccess + this.launchYear + this.landSuccess);
    return this.http.get(environment.getSpacexData + this.launchSuccess + this.launchYear + this.landSuccess);
  } 
  
}
