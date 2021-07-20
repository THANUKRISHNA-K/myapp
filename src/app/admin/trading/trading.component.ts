import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {
  tdata={
    nike:"",
    nifty:"",
    nsei:"",
    dowj:"",
    aapl:"",
    sbux:"",
    sbinns:"",
    ioc:"",
    bsesn:"",
    nifty50:""
  }
  data:any;
  disab:boolean=true;
 
  constructor(private auth:AngularFireDatabase,) { 
    const items:AngularFireList<any>=auth.list('tradingdata');
    items.snapshotChanges().subscribe(data=>{
      let a:any=[];
      data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
      a.push({key:b.key, ...b.data})
    });
   
    this.data=a;
    });
  }
  add(myform:NgForm)
  {
    this.auth.list("tradingdata").push(this.tdata);
    myform.reset();
   
  }

  ngOnInit(): void {
  }








  // nike:{m:"",w:"",d:"",current:""},
  // nifty:{m:"",w:"",d:"",current:""},
  // nsei:{m:"",w:"",d:"",current:""},
  // dowj:{m:"",w:"",d:"",current:""},
  // aapl:{m:"",w:"",d:"",current:""},
  // sbux:{m:"",w:"",d:"",current:""},
  // sbinns:{m:"",w:"",d:"",current:""},
  // ioc:{m:"",w:"",d:"",current:""},
  // bsesn:{m:"",w:"",d:"",current:""},
  // nifty50:{m:"",w:"",d:"",current:""}
}
