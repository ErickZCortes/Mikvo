import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Detailvoucher } from './detailvoucher';
import { DetailvoucherDatasourceService } from './detailvoucher-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DetailvoucherRepositoryService {

  private detailvoucher: Detailvoucher[] = [];
  private detailNumber: string[] =[];
  
  constructor( private dataSourceService: DetailvoucherDatasourceService) {
    dataSourceService.getDetailvouchers().subscribe((response) =>{
      this.detailvoucher = response['profiles'];
      this.detailNumber = response['profiles'].map(d => d.detailNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getPDetailvouchers(): Detailvoucher[]{
     return this.detailvoucher;
   };

   insertDetailvoucher(detailvoucher: Detailvoucher){
    return this.dataSourceService.insertDetailvoucher(detailvoucher)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateDetailvoucher(detailvoucher: Detailvoucher){
    return this.dataSourceService.updateDetailvoucher(detailvoucher)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteDetailvoucher(detailvoucher: Detailvoucher){
    return this.dataSourceService.deleteDetailvoucher(detailvoucher)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
