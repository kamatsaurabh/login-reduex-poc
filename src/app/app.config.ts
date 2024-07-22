import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './lib/auth.effects'; // Replace with the actual path to your AuthEffects
import { provideStore } from '@ngrx/store';
import { reducers,metaReducers } from './reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { couterReducer } from './reducers/counter.reducer';
import { authReducer } from './lib/auth.reducer';
import { environment } from 'src/environments/environment.dev';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(appRoutes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({auth: authReducer}),
    provideEffects(AuthEffects),
    // provideRouterStore(),
    !environment.production ? provideStoreDevtools() : [],
  ],
};
