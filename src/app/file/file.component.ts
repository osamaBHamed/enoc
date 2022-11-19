import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';
import { fileUploadService } from '../services/fileUpload.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  url:any='';
  //myImg:any;
  myImg:Observable<any>
  constructor(private fileUploadService:fileUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(file:any){
    debugger

    let reader=new FileReader();
    reader.readAsDataURL(file.target.files[0])
    reader.onload=(_event)=>{
      this.url=reader.result
    }

    // var SelectedFile = file.target.files[0];
    // this.convertToBase64(SelectedFile)
  }

  convertToBase64(file:File){
    // const observable=new Observable((subscriber:Subscriber<any>)=>{
    //   this.readFile(file,subscriber);
    // });
    // observable.subscribe((d)=>{
    //   console.log(d)
    //   this.myImg=d;
    // })
    this.myImg=new Observable((subscriber:Subscriber<any>)=>{
        this.readFile(file,subscriber);
      });
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete()
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error)
      subscriber.complete()
    }
  }

  onSave(){
//    const file = DataURIToBlob(this.imgBase64)
    this.fileUploadService.uploadImage(this.url).subscribe(x=>{
      debugger;
      console.log(x)
    })
  }

}
