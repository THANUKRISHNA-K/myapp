import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {AuthguardService} from '../Services/authguard.service';
import { OauthloginService } from '../Services/oauthlogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthguardService,private oauth:OauthloginService,private router:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  logout(){
    this.oauth.signOut();
  
  }
  canDeactivate(){
    return new Promise((resolve, reject) => {
  
      resolve(confirm('Do you want to Logout?')),this.auth.setLoggedIn(false),
      alert("Loggedout Successfully");
    
      
    })
  }
  langu(){
    this.router.navigate(['Language'],{relativeTo:this.aroute})
  }
  userlist(){
    this.router.navigate(['Friends'],{relativeTo:this.aroute})
  }
  stock(){
    this.router.navigate(['Stock'],{relativeTo:this.aroute})
  }
  vis(){
    this.router.navigate(['Visual'],{relativeTo:this.aroute})
  }
}
