import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-countries-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  constructor(private countriesService: CountriesService){}

  public countries:CountryInterface[]=[];
  
  searchByCountry(value:string):void{
    if(value.length ===0) return;
    this.countriesService.searchByCountry(value).subscribe(x=> this.countries=[...x]);
  }
}
