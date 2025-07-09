import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  selectedCountryId: string | null = null;

  selectCountry(event: MouseEvent): void {
    const target = event.target as SVGElement;
    const countryCode = target.id;
    this.selectedCountryId = countryCode;
    console.log('Selected:', countryCode);
  }
}
