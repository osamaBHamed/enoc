import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class fileUploadService{
    baseURL:string="http://localhost/ENOC/api/FileUpload";
    constructor(private http:HttpClient){}



    uploadImage(data:FormData):Observable<any>{
        debugger;
        return this.http.post(this.baseURL+ "/UploadImage",data);
    }
}