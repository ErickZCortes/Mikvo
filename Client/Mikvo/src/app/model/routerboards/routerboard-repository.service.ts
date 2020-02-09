import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Routerboard } from './routerboard';
import { RouterboardDatasourceService } from './routerboard-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class RouterboardRepositoryService {

  private routerboard: Routerboard[] = [];
  private routerNumber: string[] =[];
  
  constructor( private dataSourceService: RouterboardDatasourceService) {
    dataSourceService.getRouters().subscribe((response) =>{
      this.routerboard = response['routers'];
      this.routerNumber = response['routers'].map(r => r.routerNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getRouters(): Routerboard[]{
     return this.routerboard;
   };

   insertRouter(routerboard: Routerboard){
    return this.dataSourceService.insertRouter(routerboard)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateRouter(routerboard: Routerboard){
    return this.dataSourceService.updateRouter(routerboard)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteRouter(routerboard: Routerboard){
    return this.dataSourceService.deleteRouter(routerboard)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
