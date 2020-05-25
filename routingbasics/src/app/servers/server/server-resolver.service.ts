import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Sevrer{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Sevrer> {
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sevrer> | Promise<Sevrer> | Sevrer{
        return this.serversService.getServer(+route.params['id']);
    }
}