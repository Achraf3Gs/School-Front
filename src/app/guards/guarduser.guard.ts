import { CanActivateFn, Router } from '@angular/router';
import { AuthuserService } from '../services/authuser.service';
import { inject } from '@angular/core';

export const guarduserGuard: CanActivateFn = (route, state) => {
  const as=inject(AuthuserService);
  const  router=inject(Router);
  const canActivate = as.loggedIn();

  if (!canActivate) {
    // You can navigate to another route or display a message
    router.navigate(['/loginuser'],{queryParams:{returnUrl:state.url}})
  }

  return canActivate;
}
