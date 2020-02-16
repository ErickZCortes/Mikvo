import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { MikvoComponent } from './mikvo/mikvo.component';
import { UserRepositoryService } from './model/user/user-repository.service';

@Injectable()

export class Mikvoguard {
    private firstNavigation = true;
    private isLogged: boolean;
    constructor(private router: Router, private userRepositoryService : UserRepositoryService){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        this.isLogged = this.userRepositoryService.isLoggedIn();
        if (!this.isLogged){
            this.isLogged = false;
            if(route.component != MikvoComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
