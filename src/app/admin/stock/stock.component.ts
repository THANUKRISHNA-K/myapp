import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import {TradingComponent} from '../trading/trading.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers:[TradingComponent]
})
export class StockComponent implements OnInit {
  data:any;
  p:number=1;
  presentdate=new Date();
    constructor(private dialog:MatDialog,private auth:AngularFireDatabase, private trade:TradingComponent) {
      const items:AngularFireList<any>=auth.list('tradingdata');
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
       this.auth.object(`tradingdata/${i}`).remove();
     this.trade.disab=false;
     }
     enable(){
      this.trade.disab=!this.trade.disab;
     }

  ngOnInit(): void {
  }

}
