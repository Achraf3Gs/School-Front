import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthuserService } from '../services/authuser.service';


export const loginuserguardGuard: CanActivateFn = (route, state) => {
  const as=inject(AuthuserService);
  const  router=inject(Router);
  const canActivate = as.loggedIn();

  if (canActivate) {
    // You can navigate to another route or display a message
    router.navigate(['/'])
  }

  return !canActivate;
}
