import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginuserguardGuard } from './loginuserguard.guard';

describe('loginuserguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginuserguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
