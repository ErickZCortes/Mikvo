import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { TimeDatasourceService } from './time-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class TimeRepositoryService {

  private time: Time[] = [];
  private timeNumber: string[] =[];
  
  constructor( private dataSourceService: TimeDatasourceService) {
    dataSourceService.getTimes().subscribe((response) =>{
      this.time = response['times'];
      this.timeNumber = response['times'].map(t => t.timeNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getTimes(): Time[]{
     return this.time;
   };

   insertTime(time: Time){
    return this.dataSourceService.insertTime(time)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateTime(time: Time){
    return this.dataSourceService.updateTime(time)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteTime(time: Time){
    return this.dataSourceService.deleteTime(time)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
