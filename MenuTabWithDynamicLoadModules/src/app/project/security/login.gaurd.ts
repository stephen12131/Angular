import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const LoginGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const router = inject(Router);
   let ret = checkIfLoggedIn();
    return ret;

}

function checkIfLoggedIn(): boolean {
    let str='msal.account.keys'
    if(localStorage.hasOwnProperty(str) || (localStorage.getItem(str)!==null&& undefined)){
        return true;
    }else{
        return false;
    }
   
   
}
