import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

const urlApi = environment.URL_API;

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private httpClient: HttpClient) {}

  private get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  getCountry(term: string): Observable<Country[]> {
    const url = `${urlApi}/name/${term}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(term: string): Observable<Country> {
    const url = `${urlApi}/alpha/${term}`;
    return this.httpClient.get<Country>(url);
  }

  getContryByRegion(region: string): Observable<Country[]> {
    const url = `${urlApi}/regionalbloc/${region}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByCapital(cap: string): Observable<Country[]> {
    const url = `${urlApi}/capital/${cap}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }
}
