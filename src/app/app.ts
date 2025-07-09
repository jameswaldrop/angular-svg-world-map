import { Component } from '@angular/core';
import { MainAppComponent } from './main-app/main-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainAppComponent], // ✅ include the standalone component
  templateUrl: './app.html'
})
export class App {}

