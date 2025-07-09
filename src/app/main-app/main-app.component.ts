import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component'; // Make sure this path is correct!

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [MapComponent], // MapComponent must be in this array
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {}




