import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-dstock',
  templateUrl: './dstock.component.html',
  styleUrls: ['./dstock.component.scss']
})
export class DstockComponent implements OnInit {
  data:any;
  p:number=1;
  presentdate=new Date();
    constructor(private auth:AngularFireDatabase) {
      const items:AngularFireList<any>=auth.list('tradingdata');
      items.snapshotChanges().subscribe(data=>{
        let a:any=[];
        data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
        a.push({key:b.key, ...b.data})
      });
     
      this.data=a;
      });
     }
    


  ngOnInit(): void {
  }

}
