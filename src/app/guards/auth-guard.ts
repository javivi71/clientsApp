import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {

  const servicio = inject(Auth);
  const router = inject(Router);
  const logged = servicio.isAuthenticated;
  
  if (await logged()){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
