import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconRegistry } from '@angular/material/icon';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      deps: [MatIconRegistry],
      multi: true,
      useFactory: (iconRegistry: MatIconRegistry) => {
        return () =>
          iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
      },
    },
  ],
};
