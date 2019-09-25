import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EventService } from '../shared/events.services';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    constructor(private eventService: EventService, private router:Router){

    }
    canActivate(route:ActivatedRoute){
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        
        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}