import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/sample01.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
