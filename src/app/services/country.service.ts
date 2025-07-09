import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryInfo(code: string): Observable<any> {
    return this.http
      .get<any[]>(`${this.apiUrl}/${code}?format=json`)
      .pipe(
        map(response => {
          // response is an array: [metadata, data]
          // we want the first (and only) country object in data
          if (response && response.length > 1 && response[1].length > 0) {
            return response[1][0];
          }
          throw new Error('No country data found');
        })
      );
  }
}
