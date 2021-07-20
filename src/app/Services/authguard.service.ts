import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  private loggedinstatus=false;
  
  setLoggedIn(value:boolean){
    this.loggedinstatus=value;
  }
  get LoggedIn(){
    return this.loggedinstatus; 
  }

}
