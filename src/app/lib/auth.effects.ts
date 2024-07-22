import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from './login.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  loginService = inject(LoginService);
  actions = inject(Actions);

  loginEffect = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.login),
      exhaustMap(({email, password}) => {
        
        return this.loginService.login(email, password).pipe(
          map((response) => {
            return AuthActions.loginSuccess({ token: response.token });
          }),
          catchError((err) =>
            of(AuthActions.loginFailure({ error: err.message }))
          )
        );
      })
    )
  );
}
