import { CanActivateFn, Router } from '@angular/router';
import { AuthadminService } from '../views/services/services/authadmin.service';
import { inject } from '@angular/core';


export const loginguardGuard: CanActivateFn = (route, state) => {
  const as=inject(AuthadminService);
  const  router=inject(Router);
  const canActivate = as.loggedIn();

  if (canActivate) {
    // You can navigate to another route or display a message
    router.navigate(['/admin'])
  }

  return !canActivate;
}
