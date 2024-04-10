import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { CountryInterface } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apyUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {
     console.log('CountriesService inicio')
   }

  private searchBy(term: string): Observable<CountryInterface[]> {
    return this.http.get<CountryInterface[]>(`${this.apyUrl}/${term}`)
    .pipe(
      catchError( ()=> of([])), 
      // delay(2000)
    );
  }

  searchByCapital(term: string): Observable<CountryInterface[]> {
    return this.searchBy(`capital/${term}`);
  }

  searchByRegion(term: string): Observable<CountryInterface[]> {
    return this.searchBy(`region/${term}`);
  }
  
  searchByCountry(term: string): Observable<CountryInterface[]> {
    return this.searchBy(`name/${term}`);
  }

  searchByCode(cod: string): Observable<CountryInterface | null> {
    return this.searchBy(`alpha/${cod}`)
    .pipe(
      map( countries=> countries.length>0 ? countries[0]: null)
    );
  }

}