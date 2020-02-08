import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';


const PROTOCOL = 'http';

@Injectable({
    providedIn: 'root'
})
export class TimeDatasourceService {

    private bassUrl: string;

    constructor(private httpClient: HttpClient) {
        this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`;
    };

    getTimes(): any {
        return this.httpClient.get(this.bassUrl + '/times');
    };

    insertTime(time: Time) {
        return this.httpClient.post<Time>(this.bassUrl + '/times', time);
    };

    updateTime(time: Time){
        return this.httpClient.put<Time>(this.bassUrl + '/times', time);
    };

    deleteTime(time: Time){
        return this.httpClient.delete<Time>(this.bassUrl + '/times'+ time);
    };

}
