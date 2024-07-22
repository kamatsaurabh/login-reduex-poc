import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { authReducer, AuthState } from './lib/auth.reducer';
import { AuthEffects } from './lib/auth.effects';
import { login } from './lib/auth.actions';
import { RouterModule } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';
import { LoginService } from './lib/login.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth$: Observable<AuthState>;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.auth$ = store.select('auth');
  }

  login() {
    this.store.dispatch(login({ email: 'adminUser@intelegencia.com', password: 'sneWDHvd8s6eisZ' }));
  }
}