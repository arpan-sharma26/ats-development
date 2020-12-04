import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css'],
})
export class EditdetailsComponent implements OnInit {
  public candidateId = this._route.snapshot.params.id;

  candidateForm = new candidateTemplate();
  // userForm = new candidateTemplate();
  // newForm = new candidateTemplate();

  constructor(
    private http: HttpClient,
    private serv: CandidateService,
    private _route: ActivatedRoute,
    private toast: ToastrService,
    private _router: Router
  ) {}

  singleCandidate: Candidate;

  ngOnInit() {
    this.getCandidateData();
  }

  getCandidateData() {
    this.serv.getCurrentData(this.candidateId).subscribe((res) => {
      this.candidateForm = res[0];
    });
  }

  consoleEntry(values) {
    this.serv.sendDataByID(this.candidateId, values).subscribe((result) => {
      if (result) {
        this.toast.success('Candidate record updated.');
      }
    });
  }

  uploadValues(values) {
    this.serv.sendPost(values).subscribe((data) => {
      if (data) {
        this.toast.success('Data has been saved successfully.');
        this._router.navigate(['/editcandidate']);
      }
    });
  }

  // ngModel variables
  var1;
  _id;
  years = [
    '1950',
    '1951',
    '1952',
    '1953',
    '1954',
    '1955',
    '1956',
    '1957',
    '1958',
    '1959',
    '1960',
    '1961',
    '1962',
    '1963',
    '1964',
    '1965',
    '1966',
    '1967',
    '1968',
    '1969',
    '1970',
    '1971',
    '1972',
    '1973',
    '1974',
    '1975',
    '1976',
    '1977',
    '1978',
    '1979',
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
  ];

  resume: any;

  genders = [
    { value: 'Mr.', viewValue: 'Mr.' },
    { value: 'Ms.', viewValue: 'Ms.' },
    { value: 'Mrs.', viewValue: 'Mrs.' },
  ];

  qualifications = [
    { value: 'None', viewValue: 'None' },
    { value: 'MCA', viewValue: 'MCA' },
    { value: 'B.E.', viewValue: 'B.E.' },
    { value: 'BSc.', viewValue: 'BSc.' },
    { value: 'M.S.', viewValue: 'M.S.' },
    { value: 'B.Tech', viewValue: 'B.Tech' },
  ];

  sources = [
    { value: 'Added by User' },
    { value: 'Advertisement' },
    { value: 'API' },
    { value: 'Career Site' },
    { value: 'Cold Call' },
    { value: 'Embed' },
    { value: 'Employee Referral' },
    { value: 'External Referral' },
    { value: 'Facebook' },
    { value: 'Gapps' },
    { value: 'Google Import' },
    { value: 'Import' },
    { value: 'Imported by parser' },
    { value: 'Internal' },
    { value: 'Partner' },
    { value: 'Resume Inbox' },
    { value: 'Search Engine' },
    { value: 'Twitter' },
    { value: 'Imported from Zoho CRM' },
    { value: 'Indeed Resume' },
    { value: 'Vendor' },
  ];

  status = [
    {
      category: 'Screening',
      items: [
        { value: 'Waiting-for-Evaluation' },
        { value: 'Qualified' },
        { value: 'Unqualified' },
        { value: 'Junk Candidate' },
        { value: 'Contacted' },
        { value: 'Contact in Future' },
        { value: 'Not Contacted' },
        { value: 'Attempted to Contact' },
        { value: 'Associated' },
      ],
    },

    {
      category: 'Submissions',
      items: [
        { value: 'Submitted-to-Hiring Manager' },
        { value: 'Approved-by-Hiring Manager' },
        { value: 'Rejected-by-Hiring Manager' },
      ],
    },

    {
      category: 'Interview',
      items: [
        { value: 'Interview-to-be-Scheduled' },
        { value: 'Interview-Scheduled' },
        { value: 'Rejected-for-Interview' },
        { value: 'Interview-in-Progress' },
        { value: 'On-Hold' },
        { value: 'Rejected-Hirable' },
      ],
    },

    {
      category: 'Offered',
      items: [
        { value: 'Rejected' },
        { value: 'To-be-Offered' },
        { value: 'Offer-Accepted' },
        { value: 'Offer-Made' },
        { value: 'Offer-Declined' },
        { value: 'Offer Withdrawn' },
      ],
    },

    {
      category: 'Hired',
      items: [
        { value: 'Hired' },
        { value: 'Joined' },
        { value: 'No-Show' },
        { value: 'Converted-Employee' },
      ],
    },

    {
      category: 'Others',
      items: [{ value: 'Converted - Temp' }],
    },
  ];

  owners = [{ value: 'Arpit Singhal' }];

  currentJobs = [
    { value: 'None' },
    { value: 'Fresher' },
    { value: 'Project-Lead' },
    { value: 'Project-Manager' },
  ];

  show: boolean = false;
  showTwo: boolean = false;
  showThree: boolean = false;
  showFourth: boolean = false;

  title: String;

  hidden: boolean = false;
  max = 2051;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  XPOne: boolean = false;
  XPTwo: boolean = false;
  XPThree: boolean = false;

  // variables to store files.
  uploadSuccess1: string;
  uploadSuccess2: string;
  uploadSuccess3: string;
  uploadSuccess4: string;
  uploadSuccess5: string;

  // about Divs
  showDiv() {
    this.show = true;
  }

  hideDiv() {
    this.show = false;
  }

  showDivSecond() {
    this.showTwo = true;
  }

  hideDivSecond() {
    this.showTwo = false;
  }

  showDivThird() {
    this.showThree = true;
  }

  hideDivThird() {
    this.showThree = false;
  }

  showDivFourth() {
    this.showFourth = true;
  }

  hideDivFourth() {
    this.showFourth = false;
  }

  // about Divs End

  // about experience
  showXPOne() {
    this.XPOne = true;
  }

  hideXPOne() {
    this.XPOne = false;
  }

  showXPTwo() {
    this.XPTwo = true;
  }

  hideXPTwo() {
    this.XPTwo = false;
  }

  showXPThree() {
    this.XPThree = true;
  }

  hideXPThree() {
    this.XPThree = false;
  }

  basicUpload1(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append('resume', f));
    this.http.post('upload', formData).subscribe((event) => {
      this.uploadSuccess1 = 'File Uploaded.';
    });
  }
}

class candidateTemplate {
  id = 0;
  name: String;
  title: String;
  email: String;
  semail: String;
  mobile: String;
  website: String;
  street: String;
  city: String;
  stateProvince: String;
  zipCode: String;
  country: String;
  exp: String;
  qualification: String;
  currentJob: String;
  currentEmployer: String;
  expectedSalary: String;
  currentSalary: String;
  additionalInfo: String;
  skill: String;
  skype: String;
  twitter: String;
  candidateStatus: String;
  source: String;
  candidateOwner: String;
  emailOption: Boolean;
  //
  school_1: String;
  major_1: String;
  degree_1: String;
  monthFrom_11: String;
  yearFrom_11: String;
  monthTo_11: String;
  yearTo_11: String;
  pursuing_1: Boolean;
  //
  school_2: String;
  major_2: String;
  degree_2: String;
  monthFrom_2: String;
  yearFrom_2: String;
  monthTo_2: any;
  yearTo_2: String;
  pursuing_2: Boolean;
  //
  school_3: String;
  major_3: String;
  degree_3: String;
  monthFrom_3: String;
  yearFrom_3: String;
  monthTo_3: String;
  yearTo_3: String;
  pursuing_3: Boolean;
  //
  school_4: String;
  major_4: String;
  degree_4: String;
  monthFrom_4: String;
  yearFrom_4: String;
  monthTo_4: String;
  yearTo_4: String;
  pursuing_4: Boolean;
  //
  occupation1: String;
  company1: String;
  summary1: String;
  monthFrom_1: String;
  yearFrom_1: String;
  monthTo_1: String;
  yearTo_1: String;
  currentlyWorking_1: Boolean;
  //
  occupation2: String;
  company2: String;
  summary2: String;
  monthFrom_Two: String;
  yearFrom_Two: String;
  monthTo_Two: String;
  yearTo_Two: String;
  currentlyWorking_Two: Boolean;
  //
  occupation3: String;
  company3: String;
  type: String;
  summary3: String;
  monthFrom_Three: String;
  yearFrom_Three: String;
  monthTo_Three: String;
  yearTo_Three: String;
  currentlyWorking: Boolean;
}
