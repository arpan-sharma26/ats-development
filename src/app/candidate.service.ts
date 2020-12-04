import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from './candidate';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private email = new BehaviorSubject<string>('');
  share = this.email.asObservable();

  constructor(private http: HttpClient) { }
  updateData(email){
    this.email.next(email);
  }

  sendPost(values:Candidate): Observable<any>{
    console.log(values);
    console.log("Service Console.");
    return this.http.post("candidate",values);
  }

  sendDataByID(id,values:Candidate){
    return this.http.post(`candidates/${id}`,values);
  }

  getCandidates():Observable<any>{
    return this.http.get("candidates")
  }

  getCandidatesByParams(email):Observable<any>{
    return this.http.get(`candidates/${email}`);
  }

  deleteCandidate(_id):Observable<any>{
    return this.http.delete(`candidates/${_id}`);
  }

  getCurrentData(id):Observable<any>{
    return this.http.get(`candidates/${id}`)
  }

  updateRecord(id, data):Observable<any>{
    return this.http.put(`candidates/${id}`,data);
  }

}
