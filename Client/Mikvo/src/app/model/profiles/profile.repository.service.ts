import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Profile } from './profile';
import { ProfileDatasourceService } from './profile.datasource.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepositoryService {

  private profile: Profile[] = [];
  private profileNumber: string[] =[];
  
  constructor( private dataSourceService: ProfileDatasourceService) {
    dataSourceService.getProfiles().subscribe((response) =>{
      this.profile = response['profiles'];
      this.profileNumber = response['profiles'].map(p => p.profileNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getProfiles(): Profile[]{
     return this.profile;
   };

   insertProfile(profile: Profile){
    return this.dataSourceService.insertProfile(profile)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateProfile(profile: Profile){
    return this.dataSourceService.updateProfile(profile)
    .subscribe((response) => {
        console.log(response);
      });
   };

   deleteProfile(profile: Profile){
    return this.dataSourceService.deleteProfile(profile)
    .subscribe((response) => {
        console.log(response);
      });
   };
   

}
