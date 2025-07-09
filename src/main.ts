import { bootstrapApplication } from '@angular/platform-browser';
import { MainAppComponent } from './app/main-app/main-app.component';

bootstrapApplication(MainAppComponent)
  .catch(err => console.error(err));
