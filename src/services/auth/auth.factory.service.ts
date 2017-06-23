import { Injectable } from '@angular/core';
import { SpaAuthService } from './spa-auth.service';
import { MobileAuthService } from './mobile-auth.service';

import * as myGlobals from '../../globals.ts';

@Injectable()
export class AuthFactoryService {
    constructor (
        private spaAuthService: SpaAuthService, private mobileAuthService: MobileAuthService
    ) {}
    getInstance() : any
    {
        if(myGlobals.mobile) {
            return this.mobileAuthService;
        }
        else {
            return this.spaAuthService;
        }
    }
}