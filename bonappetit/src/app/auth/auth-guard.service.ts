import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map, take} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean{
    return this.authService.user.pipe(
      take(1),
      map(user=> {
        const isAuth= !!user;
        if(isAuth){
          return true; 
        }
        return this.router.createUrlTree(['/auth'])
      })
    )
  }

  constructor(private authService: AuthService, private router: Router) { }
}
