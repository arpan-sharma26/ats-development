import { Component } from '@angular/core';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods = [
    { value: "one", viewValue: "one" },
    { value: "two", viewValue: "two" },
    { value: "three", viewValue: "three" }
  ]
  title = 'Applicant Tracking System';
}
