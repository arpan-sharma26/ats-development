import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CandidateComponent } from './candidate/candidate.component';
import { JobopeningComponent } from './jobopening/jobopening.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { EditcandidateComponent } from './editcandidate/editcandidate.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CandidateComponent,
    JobopeningComponent,
    EditcandidateComponent,
    EditdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
