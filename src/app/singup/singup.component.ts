import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public singup !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router){ }

  ngOnInit(): void {
    this.singup = this.formBuilder.group({
        fname:[''],
        lname:[''],
        email:[''],
        phone:[''],
        password:['']
    })
  }

  singupdata(){
    this.http.post<any>("http://localhost:3000/signup",this.singup.value)
    .subscribe(res => {
      alert("Signup Successful");
      this.singup.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong");
    })
  }

}

