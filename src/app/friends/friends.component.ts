import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import {PopupformComponent} from '../popupform/popupform.component';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  data:any;
  p:number=1;
  
    constructor(private auth:AngularFireDatabase,private dialog:MatDialog) {
      const items:AngularFireList<any>=auth.list('userlist');
      items.snapshotChanges().subscribe(data=>{
        let a:any=[];
        data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
        a.push({key:b.key, ...b.data})
      });
     
      this.data=a;
      });
     }
     remov(i:any)
     {
       console.log({ i });
       this.auth.object(`userlist/${i}`).remove();
     }
     popup(){
      this.dialog.open(PopupformComponent);
    }
  ngOnInit(): void {
  }

}
