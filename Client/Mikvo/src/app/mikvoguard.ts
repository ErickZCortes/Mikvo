import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { MikvoComponent } from './mikvo/mikvo.component';

@Injectable()

export class Mikvoguard {
    private firstNavigation = true;
    constructor(private router: Router){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if (this.firstNavigation){
            this.firstNavigation = false;
            if(route.component != MikvoComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
