import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router} from '@angular/router';
import { AuthguardService } from './authguard.service';
@Injectable({
  providedIn: 'root'
})
export class OauthloginService {
  constructor(private fireoauthen:AngularFireAuth,private router:Router,private auth:AuthguardService) {}
  async loginwithGoogle(){
    await this.fireoauthen.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res=>{
        alert("login has done successfully")
        this.router.navigate(['/Dashboard/Friends'])
        this.auth.setLoggedIn(true)
      }).catch(
        err=>{
          alert("Error occurs during login");
          console.log(err);
        })
    }
    
    async loginwithFb(){
      await this.fireoauthen.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        res=>{
          alert("login has done successfully")
          this.router.navigate(['/Dashboard/Friends'])
          this.auth.setLoggedIn(true)
        }).catch(
          err=>{
            alert("Error occurs during login");
            console.log(err);
          })
      }
    signOut(){
      firebase.auth().signOut().then(() => {
        this.router.navigate(['Login']);
       alert("Sign-out successful.") ;
      }).catch((error) => {
        alert("error occurs during logout")
      });
    }
     
}
