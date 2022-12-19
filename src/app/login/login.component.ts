import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { observable, Observable, throwError } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login !: FormGroup
  constructor(private router : Router, private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  logindata(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res => {

      const user = res.find((a:any) => { 
        return a.email === this.login.value.email && a.password === this.login.value.password
      });

      if(user){
        //alert("Login Successful");
        this.login.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("User not found");
      }
    },err => {
      alert("Something went wrong");
    })
    
  }
}
