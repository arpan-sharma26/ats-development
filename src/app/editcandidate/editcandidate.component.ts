import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editcandidate',
  templateUrl: './editcandidate.component.html',
  styleUrls: ['./editcandidate.component.css'],
})
export class EditcandidateComponent implements OnInit {
  email = '';
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'mobile',
    'semail',
    'source',
    'Candidate Owner',
    'Actions',
  ];
  constructor(
    private candidateService: CandidateService,
    private _route: ActivatedRoute,
    private http: HttpClient,
    private toaster: ToastrService
  ) {}

  listData: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getCandidate();
  }

  getCandidate() {
    this.candidateService.getCandidates().subscribe((data) => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  // deleteEntry(_id) {
  //   this.candidateService.deleteCandidate(_id).subscribe((res) => {
  //     this.candidateService.getCandidates().subscribe((data) => {
  //       this.listData = new MatTableDataSource(data);
  //       this.listData.sort = this.sort;
  //       this.toaster.error('Candidate record deleted.');
  //     });
  //   });
  // }

  deleteEntry(_id) {
    this.candidateService.deleteCandidate(_id).subscribe((res) => {
      if (res) {
        const i = this.listData.data.findIndex((x: any) => x.id === res._id);
        // delete from data
        this.listData.data.splice(i, 1);
        this.listData.filter = '';
      }
      console.log(res);
    });
  }

  applyFilter(filterValue) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
}
