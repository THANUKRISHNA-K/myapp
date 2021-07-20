
import { Component, OnInit, ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Chart,registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-stockgrpahic',
  templateUrl: './stockgrpahic.component.html',
  styleUrls: ['./stockgrpahic.component.scss']
})
export class StockgrpahicComponent implements OnInit{
  @ViewChild('charts') charts:any;
  @ViewChild('charta') charta:any;
  @ViewChild('chartb') chartb:any;
  @ViewChild('chartc') chartc:any;
  presentdate=new Date();
  data:any;
  diag:any;
  diag2:any;
  main:any;
  chartdata:any=[];
  constructor(private auth:AngularFireDatabase) {
    const items:AngularFireList<any>=auth.list('tradingdata');
    items.snapshotChanges().subscribe(data=>{
      let a:any=[];
      data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
      a.push({key:b.key, ...b.data})
    });
   
    this.data=a;
    });
    // this.auth.list("tradingdata").valueChanges().subscribe(data=>this.main=data);
    // console.log(this.main);
    this.auth.list("tradingdata").valueChanges().subscribe(data=>this.chartdata.push(data));
    
    console.log(this.chartdata)
   }

  ngOnInit(): void {
  }
ngAfterViewInit()
{
  this.diag=this.charts.nativeElement;
  this.diag2=this.diag.getContext('2d');
  var xValues=["NIFTY","NIFTY50","NIKE","NSEI","DOWJ","AAPL","SBUX","SBIN-NS","IOC","BSESN"];
  var yValues=[1000,1500,12,1200,12500,5200,5200,2600,5400,5660]
  var barColors=["red","blue","yellow"];
  this.main=new Chart(this.diag2,{
    type: 'bar',
    data: {
      labels:xValues,
      datasets:[{
        backgroundColor:barColors,
        data:yValues
      }]
    },
 
  })
// charta
  this.diag=this.charta.nativeElement;
  this.diag2=this.diag.getContext('2d');
  var xValues=["NIFTY","NIFTY50","NIKE","NSEI","DOWJ","AAPL","SBUX","SBIN-NS","IOC","BSESN"];
  var yValues=[1000,1500,12,1200,12500,5200,5200,2600,5400,5660]
  var barColors=["pink","grey","yellow"];
  this.main=new Chart(this.diag2,{
    type: 'doughnut',
    data: {
      labels:xValues,
      datasets:[{
        backgroundColor:barColors,
        data:yValues
      }]
    },
 
  })
// chartb
  this.diag=this.chartb.nativeElement;
  this.diag2=this.diag.getContext('2d');
  var xValues=["NIFTY","NIFTY50","NIKE","NSEI","DOWJ","AAPL","SBUX","SBIN-NS","IOC","BSESN"];
  var yValues=[1000,1500,12,1200,12500,5200,5200,2600,5400,5660]
  var barColors=["pink","grey","yellow"];
  this.main=new Chart(this.diag2,{
    type: 'line',
    data: {
      labels:xValues,
      datasets:[{
        borderColor:'rgb(75, 192, 192)',
        data:yValues
      }]
    },
 
  })
// chartc
  this.diag=this.chartc.nativeElement;
  this.diag2=this.diag.getContext('2d');
  var xValues=["NIFTY","NIFTY50","NIKE","NSEI","DOWJ","AAPL","SBUX","SBIN-NS","IOC","BSESN"];
  var yValues=[1000,1500,12,1200,12500,5200,5200,2600,5400,5660]
  var barColors=["pink","grey","yellow"];
  this.main=new Chart(this.diag2,{
    type: 'radar',
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
    data: {
      labels:xValues,
      datasets:[{
        fill: true,
        data:yValues,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
        
      }]
    },
 
  })
}
}
