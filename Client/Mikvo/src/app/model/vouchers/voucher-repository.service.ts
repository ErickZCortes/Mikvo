import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Voucher } from './voucher';
import { VoucherDatasourceService } from './voucher-datasource.service';


@Injectable({
  providedIn: 'root'
})
export class VoucherRepositoryService {

  private voucher: Voucher[] = [];
  private voucherNumber: string[] =[];
  
  constructor( private dataSourceService: VoucherDatasourceService) {
    dataSourceService.getVouchers().subscribe((response) =>{
      this.voucher = response['vouchers'];
      this.voucherNumber = response['vouchers'].map(v => v.voucherNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getVouchers(): Voucher[]{
     return this.voucher;
   };

   insertVoucher(voucher: Voucher){
    return this.dataSourceService.insertVoucher(voucher)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateVoucher(voucher: Voucher){
    return this.dataSourceService.updateVoucher(voucher)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteVoucher(voucher: Voucher){
    return this.dataSourceService.deleteVoucher(voucher)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
