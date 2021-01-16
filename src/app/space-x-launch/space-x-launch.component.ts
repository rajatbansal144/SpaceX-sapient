import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-space-x-launch',
  templateUrl: './space-x-launch.component.html',
  styleUrls: ['./space-x-launch.component.css']
})
export class SpaceXLaunchComponent implements OnInit {

  constructor(private service: ServiceService) { }
  empty :boolean;
  emptyApi = 'Please wait while we are fetching Results';
  spacexRawData:any =[]
  spaceData;
  spaceData2;
  step;
  previousSelectedYear = '';
  selectedLaunchYear='';
  successfulLaunchValue='';
  successfulLandValue='';
  

  ngOnInit() {

    
      this.getSpacexRawData();
    


  }

  getSpacexRawData() {
    this.service.getdata().subscribe((dataArray) => {
      this.spacexRawData = dataArray;
      this.emptyApi = this.spacexRawData.length ? 'Please wait while we are fetching Results' : 'No results found Please Try again with other input combination';
    }, (err) => this.emptyApi = 'Please Try again after sometime ');
  }
// Year Sort Filter
  yearSort(year) {
    
   
    if (year !== this.previousSelectedYear) {
      this.selectedLaunchYear = year;
      this.previousSelectedYear = year;

    }
    else {
      this.selectedLaunchYear = '';
      this.previousSelectedYear = '';

    }
    this.service.launchYear = '&launch_year=' + this.selectedLaunchYear;
    this.getSpacexRawData();
   

  }

// Launch Success Filter
  launch(value) {
   
    if (this.successfulLaunchValue === value) {
      this.successfulLaunchValue = '';
    }
    else {
      this.successfulLaunchValue = value;
    }
    this.service.launchSuccess = '&launch_success' + '=' + this.successfulLaunchValue;
 this.getSpacexRawData();
  }

// Landing Success Filter
  land(value) {
    if (this.successfulLandValue === value) {
      this.successfulLandValue = '';
    }
    else {
      this.successfulLandValue = value;
    }
    this.service.landSuccess = '&land_success' + '=' + this.successfulLandValue;
 this.getSpacexRawData();
}}
