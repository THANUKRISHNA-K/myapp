import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  islight=true;
  isCollapsed = false;
  isdark=false;
  isbgdark=false;
  issidedark=false;
  iscondark=false;
  isicon=true;

dark(){
  this.isdark=!this.isdark;
  this.islight=!this.islight;
  this.isbgdark=!this.isbgdark;
  this.iscondark=!this.iscondark;
  this.issidedark=!this.issidedark;
  this.isicon=!this.isicon;
}
}
