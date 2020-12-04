import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Candidates } from '../candidates';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  
  candidateForm = new candidateTemplate();
  public final = "";

  genders = [
    { value: 'Mr.', viewValue: 'Mr.' },
    { value: 'Ms.', viewValue: 'Ms.' },
    { value: 'Mrs.', viewValue: 'Mrs.' },
  ]

  qualifications = [
    { value: 'None', viewValue: 'None' },
    { value: 'MCA', viewValue: 'MCA' },
    { value: 'B.E.', viewValue: 'B.E.' },
    { value: 'BSc.', viewValue: 'BSc.' },
    { value: 'M.S.', viewValue: 'M.S.' },
    { value: 'B.Tech', viewValue: 'B.Tech' },
  ]

  sources = [
    { value: 'Added by User', },
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
    { value: 'Vendor' }
  ]


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
        { value: 'Associated' }
      ]
    },

    {
      category: 'Submissions',
      items: [
        { value: 'Submitted-to-Hiring Manager' },
        { value: 'Approved-by-Hiring Manager' },
        { value: 'Rejected-by-Hiring Manager' }
      ]
    },



    {
      category: 'Interview',
      items: [
        { value: 'Interview-to-be-Scheduled' },
        { value: 'Interview-Scheduled' },
        { value: 'Rejected-for-Interview' },
        { value: 'Interview-in-Progress' },
        { value: 'On-Hold' },
        { value: 'Rejected-Hirable' }
      ]
    },


    {
      category: 'Offered',
      items: [
        { value: 'Rejected' },
        { value: 'To-be-Offered' },
        { value: 'Offer-Accepted' },
        { value: 'Offer-Made' },
        { value: 'Offer-Declined' },
        { value: 'Offer Withdrawn' }
      ]
    },

    {
      category: 'Hired',
      items: [
        { value: 'Hired' },
        { value: 'Joined' },
        { value: 'No-Show' },
        { value: 'Converted-Employee' }
      ]
    },


    {
      category: 'Others',
      items: [
        { value: 'Converted - Temp' }
      ]
    }];

  owners = [
    { value: "Arpit Singhal" }
  ];

  currentJobs = [
    { value: "None" },
    { value: "Fresher" },
    { value: "Project-Lead" },
    { value: "Project-Manager" }
  ]

  years = [];
  show: boolean = false;
  showTwo: boolean = false;
  showThree: boolean = false;
  showFourth: boolean = false;

  XPOne: boolean = false;
  XPTwo: boolean = false;
  XPThree: boolean = false;


  hidden: boolean = false;
  max = 2051;
  months = ['Jan', 'Feb', 'Mar',
    'Apr', 'May', 'June',
    'July', 'Aug', 'Sept',
    'Oct', 'Nov', 'Dec'];

  fillYears() {
    for (let i = 1950; i < this.max; i++) {
      this.years.push(i);
    }
    return this.years;
  }

  hideLink() {
    this.hidden = true;
  }

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

  constructor(private http: HttpClient, private serv: CandidateService, private toaster: ToastrService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  text;
  uploadSuccess1;
  uploadSuccess2: string;
  uploadSuccess3: string;
  uploadSuccess4: string;
  uploadSuccess5: string;

  // data variables
  addedValues:Candidate;
  candidatesStored: Candidates[];
  candidateStored: Candidates;
  deleteCandidate: Candidate;
  file;

  ngOnInit(): void {
  }

  uploadValues(values){
    this.serv.sendPost(values).subscribe(data=>{
      if(data){
        this.toaster.success("Data has been saved successfully.");
        this._router.navigate(['/editcandidate']);
      }
    });
  }

  showDatabaseValues(){
      // To get all the values from the database
    this.serv.getCandidates().subscribe(data=>{this.candidatesStored=data});
  }

  basicUpload1(files: File[], name) {
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('resume', f))
    this.serv.sendPost(name).subscribe(data=>{
      this.http.post('upload', formData)
      .subscribe(event => {
        if(event){
          this.uploadSuccess1 = "File Uploaded."
        }
      })
    })
  }

}

class candidateTemplate{
  name:String;
  title:String;
  email:String;
  semail:String;
  mobile:String;
  website:String;
  street:String;
  city:String;
  stateProvince:String
  zipCode:String
  country:String
  exp:String
  qualification:String
  currentJob:String
  currentEmployer:String
  expectedSalary:String
  currentSalary:String
  additionalInfo:String
  skill:String
  skype:String
  twitter:String
  candidateStatus:String
  source:String
  candidateOwner:String
  emailOption:Boolean
  //
  school_1:String
  major_1:String
  degree_1:String
  monthFrom_11:String
  yearFrom_11:String
  monthTo_11:String
  yearTo_11:String
  pursuing_1:Boolean
  //
  school_2:String
  major_2:String
  degree_2:String;
  monthFrom_2:String
  yearFrom_2:String
  monthTo_2:any
  yearTo_2:String
  pursuing_2:Boolean
  //
  school_3:String
  major_3:String
  degree_3:String;
  monthFrom_3:String
  yearFrom_3:String
  monthTo_3:String
  yearTo_3:String
  pursuing_3:Boolean
  //
  school_4:String
  major_4:String
  degree_4:String;
  monthFrom_4:String
  yearFrom_4:String
  monthTo_4:String
  yearTo_4:String
  pursuing_4:Boolean
  //
  occupation1:String
  company1:String
  summary1:String
  monthFrom_1:String
  yearFrom_1:String
  monthTo_1:String
  yearTo_1:String
  currentlyWorking_1:Boolean
  //
  occupation2:String
  company2:String
  summary2:String
  monthFrom_Two:String
  yearFrom_Two:String
  monthTo_Two:String
  yearTo_Two:String
  currentlyWorking_Two:Boolean
  //
  occupation3:String
  company3:String
  type: String
  summary3:String
  monthFrom_Three:String
  yearFrom_Three:String
  monthTo_Three:String
  yearTo_Three:String
  currentlyWorking:Boolean
}
