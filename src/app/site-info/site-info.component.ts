import { Component, ElementRef, OnInit } from '@angular/core';
import { facilities } from '../models/facilities';
import { siteFacilities } from '../models/siteFacilities';
import { facilitiesService } from '../services/facilities.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit {

  facilities:Array<facilities>
  constructor(private facilitiesService:facilitiesService) { }

  ngOnInit(): void {
    this.facilitiesService.loadAll().subscribe(data=>{
      debugger;
      this.facilities=data;
      this.facilities.forEach(element => {
        debugger
        element.siteFacilities={id:0,facilityId:element.id,status:false}
      });
    });
  }

  onSave(facilities:Array<facilities>){
    debugger
  }

  onEdit(){
    debugger;
    var facilitiesIds:any[];
    this.facilitiesService.loadSiteFacility(1).subscribe(data=>{
      debugger
      facilitiesIds=data.map(x=>x.facilityId)
      this.facilities.forEach(element => {
        debugger
        facilitiesIds.forEach(element1 => {
          debugger
        if(element.siteFacilities.facilityId==element1){
          debugger
          element.siteFacilities.status=true
        }
      });
    });
    })

  }
  // fill(obj:any,chk:any){
  //   debugger
  //   if(obj.siteFacilities ==null){
  //     obj.siteFacilities=[];
  //   }
  //   if(!obj.siteFacilities.find(x=>x.facilityId=obj.id)){
  //   obj.siteFacilities.push({facilityId:obj.id,status:chk.target.checked})
  // }
  //   debugger;
  // }

}
