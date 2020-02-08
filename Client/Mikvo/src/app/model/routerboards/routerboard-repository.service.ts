import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Routerboard } from './routerboard';
import { RouterboardDatasourceService } from './routerboard.datasource.service';

@Injectable({
  providedIn: 'root'
})
export class RouterboardRepositoryService {

  private routerboard: Routerboard[] = [];
  private routerNumber: string[] =[];
  
  constructor( private dataSourceService: RouterboardDatasourceService) {
    dataSourceService.getRouters().subscribe((response) =>{
      this.routerboard = response['routerboards'];
      this.routerNumber = response['routerboards'].map(r => r.routerNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getRouters(): Routerboard[]{
     return this.routerboard;
   };

   insertRouter(router: Routerboard){
    return this.dataSourceService.insertRouter(router)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateRouter(router: Routerboard){
    return this.dataSourceService.updateRouter(router)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteRouter(router: Routerboard){
    return this.dataSourceService.deleteRouter(router)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
