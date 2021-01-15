import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-space-x-launch',
  templateUrl: './space-x-launch.component.html',
  styleUrls: ['./space-x-launch.component.css']
})
export class SpaceXLaunchComponent implements OnInit {

  constructor(private service: ServiceService) { }
  empty = true;
  spacexRawData
  spaceData;
  spaceData2;
  step;
  previousSelectedYear = '';
  selectedLaunchYear='';
  successfulLaunchValue='';
  successfulLandValue='';
  launchYear: Array<string> = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  

  ngOnInit() {

    this.service.getdata().subscribe((data) => {
      console.log(data)
      this.spaceData = data;
      console.log(this.spaceData)
      this.spaceData2 = this.spaceData;

      this.getSpacexRawData();
    });


  }

  getSpacexRawData() {
    console.log(this.launchYear[4]);
    this.service.getdata().subscribe((dataArray) => {
      this.spacexRawData = dataArray;
         });
         }
// Year Sort Filter
  yearSort(year) {
    
    // this.spaceData = this.spaceData2;
    // let yearFilter = this.spaceData.filter(function (data) {
    //    return data.launch_year  == year;
    // });
    // if (yearFilter != '') {
    //   this.spaceData = yearFilter;
    //   this.empty = true;
    // }
    // if (yearFilter == '') {
    //   this.empty = false;
    // }
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
    // if(this.spacexRawData.length ==0){
    //   this.empty= true
    // }
    // else{
    //   this.empty= false
    // }
    // this.previousSelectedYear = year;
  

  }

// Launch Success Filter
  launch(value) {
    // this.empty = true;
    // this.spaceData = this.spaceData2;
    // let launchFilter = this.spaceData.filter(function (data1) {
    //   return data1.launch_success == value;
    // });
    // this.spaceData = launchFilter;
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
    this.service.launchSuccess = '&land_success' + '=' + this.successfulLandValue;
 this.getSpacexRawData();
}}
