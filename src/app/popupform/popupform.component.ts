import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { MatDialog} from '@angular/material/dialog';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';
import { PropicfireService } from '../Services/propicfire.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.scss']
})
export class PopupformComponent implements OnInit {
  lst={
    names:"",
    id:"",
    phone:"",
    email:"",
    dept:"",
    college:"",
    locality:"",
    filedata:"",
  }
  data:any;
  selectedImage:any=null;
 
  constructor(private auth:AngularFireDatabase,private dialog:MatDialog,private afStorage:AngularFireStorage,private imgservice:PropicfireService) { 
    const items:AngularFireList<any>=auth.list('userlist');
    items.snapshotChanges().subscribe(data=>{
      let a:any=[];
      data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
      a.push({key:b.key, ...b.data})
    });
   
    this.data=a;
    });
  }
  upload(event:any) {    
    const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage=event.target.files[0]
  }
  uploadImage(){
    if(this.lst.filedata==""){
      alert("please upload file")
    }
    else{
      alert("image is uploading")
    var filepath=`images/${this.selectedImage.name}_${new Date().getTime()}`;
    const fileRef= this.afStorage.ref(filepath)
    this.afStorage.upload(filepath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          this.lst.filedata=url;
           this.imgservice.insertimage(this.lst.filedata);
           alert("image is uploaded successfully");
        })
      })
    ).subscribe();
     
       
  }
}
  add(myform:NgForm)
  {
    this.auth.list("userlist").push(this.lst);
    myform.reset();
   
  }
  close(){
this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
