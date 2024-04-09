import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

public countries:CountryInterface[]=[]

  constructor(private countriesService: CountriesService){}

  searchByCapital(value:string):void{
    if(value.length ===0) return;
    this.countriesService.searchByCapital(value).subscribe(x=> this.countries =[...x]);
  }
}
