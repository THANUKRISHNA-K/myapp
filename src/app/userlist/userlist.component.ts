import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import {MatDialog} from '@angular/material/dialog';
import {PopupformComponent} from '../popupform/popupform.component';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
data:any;
p:number=1;

  constructor(private dialog:MatDialog,private auth:AngularFireDatabase) {
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
   edit(user:any){
     this.data=user;
   }
   updat(i:any){
    this.auth.object(`userlist/${i}`).update(i);
   }

  ngOnInit(): void {
    
  }
popup(){
  this.dialog.open(PopupformComponent);
}
}
