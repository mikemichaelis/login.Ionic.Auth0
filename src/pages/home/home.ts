import { Component } from '@angular/core';

import { AuthFactoryService } from '../../services/auth/auth.factory.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  auth: any;

  constructor(public authFactoryService: AuthFactoryService) {
    this.auth = authFactoryService.getInstance();
  }
}
