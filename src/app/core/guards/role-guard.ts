import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';


export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth) as Auth;
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
