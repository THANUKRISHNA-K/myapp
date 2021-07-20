import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from 'src/app/Services/authguard.service';

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.scss']
})
export class AdminmoduleComponent implements OnInit {

  constructor(private auth:AuthguardService, private router:Router,private route:ActivatedRoute) { }
home(){
  this.router.navigate(['Home'],{relativeTo:this.route})
}
stock(){
  this.router.navigate(['Stock'],{relativeTo:this.route})
}
graphic(){
  this.router.navigate(['Stockgraphic'],{relativeTo:this.route})
}
trading(){
  this.router.navigate(['Tradingdata'],{relativeTo:this.route})
}
userlist(){
  this.router.navigate(['Userlist'],{relativeTo:this.route})
}
  ngOnInit(): void {
  }
  canDeactivate(){
    return new Promise((resolve, reject) => {
  
      resolve(confirm('Do you want to Logout?')),this.auth.setLoggedIn(false),
      alert("Loggedout Successfully");
    
      
    })
  }

}
