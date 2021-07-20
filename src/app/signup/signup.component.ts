import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupeauthService } from '../Services/signupeauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSignedIn = false;
  enablebtn=true;
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,public firebaseService:SignupeauthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],});

      if(localStorage.getItem('user')!== null)
      this.isSignedIn= true
      else
      this.isSignedIn = false
    }

    async onSignup(email:string,password:string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
      alert("Account created successfully");
      this.enablebtn=false;
   
  }

    }

      
  
 




