import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { JobopeningComponent } from './jobopening/jobopening.component';
import { EditcandidateComponent } from './editcandidate/editcandidate.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

const routes: Routes = [
  { path: 'jobs', component: JobopeningComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'editcandidate', component: EditcandidateComponent },
  { path: 'editdetails/:id', component: EditdetailsComponent },
  { path: 'editdetails', component: EditdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  JobopeningComponent,
  CandidateComponent,
  EditcandidateComponent,
  EditdetailsComponent,
];
