import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from '../Services/authguard.service';
import { OauthloginService } from '../Services/oauthlogin.service';
import { SignupeauthService} from '../Services/signupeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  validateForm!: FormGroup;
  userid="";
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private router:Router,public firebaseService:SignupeauthService,private oauthservice:OauthloginService,private auth:AuthguardService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    if(localStorage.getItem('user')!== null){
      this.isSignedIn= true;
    }
    else
    this.isSignedIn = false;
    
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
   if(this.userid.slice(-9)=="admin.com"){
      this.isSignedIn = true;
      this.router.navigate(['/Administrator/Home'])
      this.auth.setLoggedIn(true);  
    }
      else{
        if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true;
        this.router.navigate(['/Dashboard/Friends'])
        this.auth.setLoggedIn(true);  
      }
   
  }

  loginwithgoogle(){
    this.oauthservice.loginwithGoogle();
  }
  loginwithfb(){
    this.oauthservice.loginwithFb();
  }
}
