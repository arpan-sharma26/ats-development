import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css'],
})
export class JobProfileComponent implements OnInit {
  jobProfile = new jobTemplate();

  name = 'testJob';
  genders = ['mr', 'mrs'];

  // Getting following values from the database.
  postingTitle = 'Senior Accountant';
  deptName = 'Paula Rojas';
  jobOpeningStatus = 'Inactive';
  jobID = 'ZR_3_JOB';
  title = 'Accountant';
  assignedRecruiter = 'Arpit';
  hiringManager = 'Arpit Singhal';
  targetDate = '10 Jan 2020';
  numberOfPositions = 10;
  dateOpened = '5 Dec 2020';
  industry = [
    'None',
    'Administration',
    'Advertising',
    'Agriculture',
    'Architecture & Construction',
    'Arts & Graphics',
    'Airline - Aviation',
    'Accounting',
    'Automotive',
    'Banking',
    'Biotechnology',
    'Broadcasting',
    'Business Management',
    'Charity',
    'Catering',
    'Customer Service',
    'Chemicals',
    'Construction',
    'Communications',
    'Consulting',
    'Computer',
    'Consumer',
    'Cosmetics',
    'Design',
    'Defence',
    'Education',
    'Electronics',
    'Engineering',
    'Energy and Utilities',
    'Entertainment',
    'Employment - Recruiting - Staffing',
    'Environmental',
    'Exercise - Fitness',
    'Export/import',
    'Financial Services',
    'Fashion',
    'FMCG/Foods/Beverage',
    'Fertilizers/Pesticides',
  ];
  //
  jobData() {
    console.log('sample text');
  }
  constructor() {}

  ngOnInit(): void {}
}

class jobTemplate {
  publish: String;
  title: String;
  targetDate: String;
  city: String;
  assignedRecruiter: String;
  postingTitle: String;
  jobID: String;
  deptName: String;
  hiringManager: String;
  numberOfPositions: Number;
  jobOpeningStatus: String;
  dateOpened: String;
  industry: String;
  jobType: String;
}
