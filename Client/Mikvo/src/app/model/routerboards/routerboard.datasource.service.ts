import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routerboard } from './routerboard';


const PROTOCOL = 'http';

@Injectable({
    providedIn: 'root'
})
export class RouterboardDatasourceService {

    private bassUrl: string;

    constructor(private httpClient: HttpClient) {
        this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`;
    };

    getRouters(): any {
        return this.httpClient.get(this.bassUrl + '/routers');
    };

    insertRouter(router: Routerboard) {
        return this.httpClient.post<Routerboard>(this.bassUrl + '/routers', router);
    };

    updateRouter(router: Routerboard){
        return this.httpClient.put<Routerboard>(this.bassUrl + '/routers', router);
    };

    deleteRouter(router: Routerboard){
        return this.httpClient.delete<Routerboard>(this.bassUrl + '/routers'+ router);
    };

}