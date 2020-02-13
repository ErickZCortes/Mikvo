import { Component, OnInit } from '@angular/core';
import { Routerboard } from 'src/app/model/routerboards/routerboard';
import { RouterboardRepositoryService } from 'src/app/model/routerboards/routerboard-repository.service';
import { Router } from '@angular/router';
import { RouterboardDatasourceService } from 'src/app/model/routerboards/routerboard-datasource.service';

@Component({
  selector: 'app-routerboard',
  templateUrl: './routerboard.component.html',
  styleUrls: ['./routerboard.component.scss']
})
export class RouterboardComponent implements OnInit {

  routerboard :Routerboard= {} as Routerboard;

  constructor(private router: Router, private routerboardRepoService: RouterboardRepositoryService) { 
  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  get routers(): Routerboard[]{
    return this.routerboardRepoService.getRouters();
  }

  insertRouter(){
   this.routerboardRepoService.insertRouter(this.routerboard);
  }
  
  //deletRouter(routerid: number){
  //  this.routerboardRepoService.deleteRouter(routerid);
  //}
}
