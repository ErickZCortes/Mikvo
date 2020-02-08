import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detailvoucher } from './detailvoucher';


const PROTOCOL = 'http';

@Injectable({
    providedIn: 'root'
})
export class DetailvoucherDatasourceService {

    private bassUrl: string;

    constructor(private httpClient: HttpClient) {
        this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`;
    };

    getDetailvouchers(): any {
        return this.httpClient.get(this.bassUrl + '/detailvouchers');
    };

    insertDetailvoucher(detailvoucher: Detailvoucher) {
        return this.httpClient.post<Detailvoucher>(this.bassUrl + '/detailvouchers', detailvoucher);
    };

    updateDetailvoucher(detailvoucher: Detailvoucher){
        return this.httpClient.put<Detailvoucher>(this.bassUrl + '/detailvouchers', detailvoucher);
    };

    deleteDetailvoucher(detailvoucher: Detailvoucher){
        return this.httpClient.delete<Detailvoucher>(this.bassUrl + '/detailvouchers'+ detailvoucher);
    };

}
