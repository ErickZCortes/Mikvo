import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from './voucher';



const PROTOCOL = 'http';

@Injectable({
    providedIn: 'root'
})
export class VoucherDatasourceService {

    private bassUrl: string;

    constructor(private httpClient: HttpClient) {
        this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`;
    };

    getVouchers(): any {
        return this.httpClient.get(this.bassUrl + '/vouchers');
    };

    insertVoucher(voucher: Voucher) {
        return this.httpClient.post<Voucher>(this.bassUrl + '/vouchers', voucher);
    };

    updateVoucher(voucher: Voucher){
        return this.httpClient.put<Voucher>(this.bassUrl + '/vouchers', voucher);
    };

    deleteVoucher(voucher: Voucher){
        return this.httpClient.delete<Voucher>(this.bassUrl + '/vouchers'+ voucher);
    };

}
