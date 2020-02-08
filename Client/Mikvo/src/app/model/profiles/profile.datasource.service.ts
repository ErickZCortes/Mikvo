import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';


const PROTOCOL = 'http';

@Injectable({
    providedIn: 'root'
})
export class ProfileDatasourceService {

    private bassUrl: string;

    constructor(private httpClient: HttpClient) {
        this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`;
    };

    getProfiles(): any {
        return this.httpClient.get(this.bassUrl + '/profiles');
    };

    getProfilebyId(idprofile:number){
        return this.httpClient.get(this.bassUrl + '/profiles/' +idprofile);
    };

    insertProfile(profile: Profile) {
        return this.httpClient.post<Profile>(this.bassUrl + '/profiles', profile);
    };

    updateProfile(profile: Profile){
        return this.httpClient.put<Profile>(this.bassUrl + '/profiles', profile);
    };

    deleteProfile(profile: Profile){
        return this.httpClient.delete<Profile>(this.bassUrl + '/profiles'+ profile);
    };

}
