import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public pass !: FormGroup;
  constructor(private route : Router, private http : HttpClient, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.pass = this.formBuilder.group({
      csv : [''],
      interval : [''],
      NoOfWeeks : ['']
    })
  }

  ToBackend(){
    console.log(this.pass.value);
  }

}
